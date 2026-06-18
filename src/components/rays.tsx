"use client";

import { useEffect, useRef, useState } from "react";
import { Renderer, Geometry, Program, Mesh } from "ogl";

/* ---------------- helpers ---------------- */

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const getRayConfig = (
  origin: string,
  w: number,
  h: number,
): { anchor: [number, number]; dir: [number, number] } => {
  switch (origin) {
    case "top-center":
      return { anchor: [w * 0.5, 0], dir: [0, 1] };
    case "center":
      return { anchor: [w * 0.5, h * 0.5], dir: [0, 1] };
    case "bottom-center":
      return { anchor: [w * 0.5, h], dir: [0, -1] };
    default:
      return { anchor: [w * 0.5, 0], dir: [0, 1] };
  }
};

/* ---------------- component ---------------- */

export type RaysProps = {
  raysOrigin?: string;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
};

export default function Rays({
  raysOrigin = "top-center",
  raysColor = "#ffffff",
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1,
  saturation = 1,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0,
  distortion = 0,
  className = "",
}: RaysProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const uniformsRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);

  const mouseTarget = useRef({ x: 0.5, y: 0.5 });
  const mouseSmooth = useRef({ x: 0.5, y: 0.5 });

  const [visible, setVisible] = useState(false);

  /* intersection observer */
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.1 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  /* webgl setup */
  useEffect(() => {
    if (!visible || !ref.current) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });
    rendererRef.current = renderer;

    const gl = renderer.gl;
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    ref.current.innerHTML = "";
    ref.current.appendChild(gl.canvas);

    const geometry = new Geometry(gl, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 3, -1, -1, 3]),
      },
    });

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      rayPos: { value: [0, 0] },
      rayDir: { value: [0, 1] },
      raysColor: { value: hexToRgb(raysColor) },
      raysSpeed: { value: raysSpeed },
      lightSpread: { value: lightSpread },
      rayLength: { value: rayLength },
      pulsating: { value: pulsating ? 1 : 0 },
      fadeDistance: { value: fadeDistance },
      saturation: { value: saturation },
      mousePos: { value: [0.5, 0.5] },
      mouseInfluence: { value: mouseInfluence },
      noiseAmount: { value: noiseAmount },
      distortion: { value: distortion },
    };

    uniformsRef.current = uniforms;

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: `
        precision highp float;

        uniform float iTime;
        uniform vec2 iResolution;
        uniform vec2 rayPos;
        uniform vec2 rayDir;
        uniform vec3 raysColor;
        uniform float raysSpeed;
        uniform float lightSpread;
        uniform float rayLength;
        uniform float pulsating;
        uniform float fadeDistance;
        uniform float saturation;
        uniform vec2 mousePos;
        uniform float mouseInfluence;
        uniform float noiseAmount;
        uniform float distortion;

        float noise(vec2 st) {
          return fract(sin(dot(st, vec2(12.9898,78.233))) * 43758.5453);
        }

        float rayStrength(
          vec2 src,
          vec2 dir,
          vec2 coord,
          float seedA,
          float seedB,
          float speed
        ) {
          vec2 d = coord - src;
          vec2 n = normalize(d);
          float angle = dot(n, dir);

          angle += distortion * sin(iTime * 2.0 + length(d) * 0.01) * 0.2;

          float spread = pow(max(angle, 0.0), 1.0 / max(lightSpread, 0.001));
          float dist = length(d);
          float maxDist = iResolution.x * rayLength;
          float lenFalloff = clamp((maxDist - dist) / maxDist, 0.0, 1.0);

          float fade = clamp(
            (iResolution.x * fadeDistance - dist) /
            (iResolution.x * fadeDistance),
            0.5, 1.0
          );

          float pulse =
            pulsating > 0.5
              ? (0.8 + 0.2 * sin(iTime * speed * 3.0))
              : 1.0;

          float base =
            (0.6 + 0.2 * sin(angle * seedA + iTime * speed)) +
            (0.45 + 0.25 * cos(-angle * seedB + iTime * speed));

          return clamp(base, 0.0, 1.0)
            * spread * lenFalloff * fade * pulse;
        }

        void main() {
          vec2 coord = vec2(gl_FragCoord.x, iResolution.y - gl_FragCoord.y);

          vec2 dir = rayDir;
          if (mouseInfluence > 0.0) {
            vec2 m = mousePos * iResolution;
            dir = normalize(mix(rayDir, normalize(m - rayPos), mouseInfluence));
          }

          vec4 r1 = vec4(1.0) *
            rayStrength(rayPos, dir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);

          vec4 r2 = vec4(1.0) *
            rayStrength(rayPos, dir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);

          vec4 col = r1 * 0.7 + r2 * 0.6;

          if (noiseAmount > 0.0) {
            float n = noise(coord * 0.01 + iTime * 0.1);
            col.rgb *= mix(1.0, n, noiseAmount);
          }

          float b = 1.0 - (coord.y / iResolution.y);
          col.r *= 0.3 + b * 1.2;
          col.g *= 0.5 + b * 1.0;
          col.b *= 0.7 + b * 0.8;

          float g = dot(col.rgb, vec3(0.299, 0.587, 0.114));
          col.rgb = mix(vec3(g), col.rgb, saturation);

          gl_FragColor = vec4(col.rgb * raysColor, col.a);
        }
      `,
      uniforms,
    });

    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;

    const resize = () => {
      if (!ref.current) return;
      const { width, height } = ref.current.getBoundingClientRect();
      renderer.setSize(width, height);

      uniforms.iResolution.value = [
        width * renderer.dpr,
        height * renderer.dpr,
      ];

      const { anchor, dir } = getRayConfig(
        raysOrigin,
        width * renderer.dpr,
        height * renderer.dpr,
      );
      uniforms.rayPos.value = anchor;
      uniforms.rayDir.value = dir;
    };

    const loop = (t: number) => {
      uniforms.iTime.value = t * 0.001;

      if (followMouse) {
        mouseSmooth.current.x =
          mouseSmooth.current.x * 0.92 + mouseTarget.current.x * 0.08;
        mouseSmooth.current.y =
          mouseSmooth.current.y * 0.92 + mouseTarget.current.y * 0.08;
        uniforms.mousePos.value = [
          mouseSmooth.current.x,
          mouseSmooth.current.y,
        ];
      }

      renderer.render({ scene: mesh });
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [visible]);

  /* mouse tracking */
  useEffect(() => {
    if (!followMouse) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mouseTarget.current = {
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [followMouse]);

  return (
    <div
      ref={ref}
      className={`w-full h-full pointer-events-none relative overflow-hidden ${className}`}
    />
  );
}
