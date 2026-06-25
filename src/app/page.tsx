import Header from "../components/header";
import Hero from "../components/hero";
import Rays from "../components/rays";
import About from "../components/about";
import Projects from "../components/projects";
import TechStack from "../components/techstack";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 top-[-140px] blur-md w-full h-[100%] opacity-70">
        <Rays
          raysOrigin="top-center"
          raysColor="#14b8a6"
          raysSpeed={1.2}
          lightSpread={0.3}
          rayLength={1.2}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"
        aria-hidden
      />

      {/* Content on top */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <TechStack />
      </div>
    </div>
  );
}
