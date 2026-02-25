import { Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex flex-row p-6 justify-between">
      <span className="text-lg text-white ml-16">~/maaz</span>

      <button className="text-white/70 hover:text-white transition mr-20">
        <Moon size={20} />
      </button>
    </header>
  );
}
