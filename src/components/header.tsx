import { Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between bg-transparent">
      <span className="ml-23 mt-6.5 text-lg font-[650] text-white">
        ~/maaz
      </span>

      <button className="text-white/70 hover:text-white transition mr-26 mt-6.5">
        <Moon size={19} />
      </button>
    </header>
  );
}