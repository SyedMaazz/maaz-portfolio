"use client";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrolled
          ? "bg-hsl(240deg 11.11% 5.29%) backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
     <div className={`max-w-[1400px] w-full mx-auto pl-8 px-10.5 flex flex-row justify-between items-center transition-all duration-300 ${
  scrolled ? "py-4.5" : "py-6"
}`}>
        <span className="text-lg font-[650] text-white">
          ~/maaz
        </span>
        <button className="text-white/70 hover:text-white transition">
          <Moon size={19} />
        </button>
      </div>
    </header>
  );
}