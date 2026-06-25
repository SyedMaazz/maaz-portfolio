"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import {
  Layers,
  Server,
  Code2,
  Cloud,
  Wrench,
  Lightbulb,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const TABS = [
  { label: "Frontend", icon: Layers },
  { label: "Backend", icon: Server },
  { label: "Languages", icon: Code2 },
  { label: "Cloud", icon: Cloud },
  { label: "Tools", icon: Wrench },
  { label: "Other", icon: Lightbulb },
];

const STACK: Record<string, { name: string; level: "expert" | "proficient" | "familiar"; years: string; percent: number; projects: number }[]> = {
  Frontend: [
    { name: "Tailwind CSS", level: "expert", years: "3+ years", percent: 90, projects: 20 },
    { name: "HTML/CSS", level: "expert", years: "4+ years", percent: 95, projects: 25 },
    { name: "React", level: "proficient", years: "3+ years", percent: 85, projects: 15 },
    { name: "Next.js", level: "proficient", years: "2+ years", percent: 80, projects: 8 },
    { name: "TypeScript", level: "proficient", years: "2+ years", percent: 78, projects: 12 },
  ],
  Backend: [
    { name: "Node.js", level: "proficient", years: "2+ years", percent: 75, projects: 10 },
    { name: "Express", level: "proficient", years: "2+ years", percent: 72, projects: 8 },
    { name: "MongoDB", level: "familiar", years: "1+ years", percent: 60, projects: 5 },
  ],
  Languages: [
    { name: "JavaScript", level: "expert", years: "4+ years", percent: 92, projects: 30 },
    { name: "TypeScript", level: "proficient", years: "2+ years", percent: 78, projects: 12 },
    { name: "C++", level: "familiar", years: "2+ years", percent: 60, projects: 6 },
  ],
  Cloud: [
    { name: "AWS", level: "familiar", years: "1+ years", percent: 55, projects: 3 },
    { name: "Vercel", level: "proficient", years: "2+ years", percent: 80, projects: 15 },
  ],
  Tools: [
    { name: "Git", level: "expert", years: "3+ years", percent: 90, projects: 30 },
    { name: "VS Code", level: "expert", years: "4+ years", percent: 95, projects: 30 },
    { name: "Figma", level: "familiar", years: "1+ years", percent: 60, projects: 8 },
  ],
  Other: [
    { name: "Web3", level: "familiar", years: "1+ years", percent: 50, projects: 2 },
    { name: "REST APIs", level: "proficient", years: "2+ years", percent: 80, projects: 12 },
  ],
};

const LEVEL_COLORS = {
  expert: "bg-green-500/20 text-green-400",
  proficient: "bg-blue-500/20 text-blue-400",
  familiar: "bg-white/10 text-white/60",
};

const BAR_COLORS = {
  expert: "bg-green-500",
  proficient: "bg-blue-500",
  familiar: "bg-white/40",
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="techstack"
      className={`w-full bg-[#000000] py-24 ${inter.className}`}
    >
      <div className="max-w-[1100px] mx-auto px-8 mt-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-[17px]">
            # Tech Stack
          </h2>
          <p className="text-[#a1a1aa] text-base">
            Technologies, frameworks, and tools I use to build software
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#121215] p-1 mb-8 overflow-x-auto">
          {TABS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1 justify-center ${
                activeTab === label
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {STACK[activeTab].map(({ name, level, years, percent, projects }) => (
            <div
              key={name}
              className="rounded-xl border border-white/5 bg-[#121215] p-4 flex flex-col gap-3 hover:border-white/20 transition-all duration-200"
            >
              {/* Name + level badge */}
              <div>
                <p className="text-sm font-semibold text-white mb-1">{name}</p>
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${LEVEL_COLORS[level]}`}>
                  {level}
                </span>
              </div>

              {/* Years + percent */}
              <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                <span>{years}</span>
                <span className="font-semibold text-white">{percent}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${BAR_COLORS[level]}`}
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* Projects count */}
              <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                <span>Projects</span>
                <span className="font-semibold text-white">{projects}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}