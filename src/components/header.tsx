import { Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-20">
      <div className="max-w-[1400px] mx-auto px-8 pr-10.5 py-6 flex flex-row justify-between items-center">
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