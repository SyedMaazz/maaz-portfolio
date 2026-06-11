"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Inter, Fira_Code } from "next/font/google";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

const TYPED_WORDS = ["web experiences", "fast UIs", "clean code", "cool stuff"];

const TECH_STACK = [
  { name: "JavaScript", bg: "#06183d", text: "#0059ff" },
  { name: "GoLang", bg: "#093309", text: "#00cc00" },
  { name: "C++", bg: "#27272a", text: "#fbfbfb" },
  { name: "Rust", bg: "#27272a", text: "#fbfbfb" },
  { name: "React", bg: "#3b0909", text: "#ff0000" },
  { name: "Node.js", bg: "#38270a", text: "#ffaf00" },
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = TYPED_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
    }

    setTypedText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section
      className={`relative min-h-screen w-full flex items-center ${inter.className}`}
    >
      <div
        className={`w-full max-w-4xl px-8 pt-28 mx-auto transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Badge — Fira Code, reduced bottom margin */}
        <div
          className={`font-semibold inline-flex items-center rounded-full border bg-white/8 border-white/40 px-4 py-[6px] text-[14px] text-white mb-2 ${firaCode.className}`}
        >
          IEEE IILM Member
        </div>

        {/* Heading — slightly smaller */}
        <h1
          className="text-5xl font-bold text-white leading-tight sm:text-6xl"
          style={{ letterSpacing: "-0.01em" }}
        >
          Hi, I&apos;m Syed Maaz
        </h1>

        {/* Typewriter subheading */}
        <h2
          className="mt-2.5 text-2xl font-semibold text-white/65 sm:text-3xl"
          style={{ letterSpacing: "0.01em" }}
        >
          I build{" "}
          <span className="text-white">
            {typedText}
            <span className="inline-block w-[2px] h-[0.9em] bg-white ml-1 align-middle animate-pulse" />
          </span>
        </h2>

        {/* Description — first line ends at "in" */}
        <p className="mt-6 max-w-[600px] text-lg leading-7 text-white/40">
          Software engineer from Lucknow, India. Currently pursuing B.Tech in
          Computer Science at IILM University with a passion for Frontend
          development.
        </p>

        {/* Tech stack pills — brighter colors */}
        <div className="mt-6 flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <span
              key={tech.name}
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: tech.bg,
                color: tech.text,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* CTA buttons — smaller */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-3 py-[7.5px] text-[14px] font-medium text-black hover:bg-gray-100 transition-colors duration-200"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-[7px] text-[14px] font-medium text-white hover:bg-white/5 transition-all duration-200"
          >
            Resume
            <Download className="h-4 w-4" />
          </a>
        </div>

        {/* Social links — react-icons matching reference site */}
        <div className="mt-8 flex items-center gap-3.5">
          {[
            { label: "GitHub", href: "https://github.com/", icon: FaGithub },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/",
              icon: FaLinkedin,
            },
            { label: "Twitter", href: "https://twitter.com/", icon: FaTwitter },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
