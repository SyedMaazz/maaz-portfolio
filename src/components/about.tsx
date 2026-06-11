"use client";

import Image from "next/image";
import { Code2, Users, Lightbulb, Target } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const CARDS = [
  {
    icon: Code2,
    title: "Developer",
    description:
      "Frontend developer with expertise in React and Next.js. Building responsive, performant web applications and exploring new technologies.",
  },
  {
    icon: Users,
    title: "Student Leader",
    description:
      "Leadership roles at IEEE IILM chapter as Treasurer and EPS Chair. Contributing to technical initiatives and community building.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Passionate about building solutions that solve real problems. Constantly learning better ways to tackle complex challenges.",
  },
  {
    icon: Target,
    title: "Current Focus",
    description:
      "Exploring Web3 and backend development. Enhancing skills in Next.js, Node.js, and decentralized technologies.",
  },
];

const EXPERIENCE = [
  { role: "IEEE-IILM Treasurer", org: "IEEE IILM Chapter" },
  { role: "Innovation Incubation Centre", org: "IILM University" },
];

const INTERESTS = [
  "Frontend Development",
  "Backend Development",
  "Next.js",
  "Claude AI",
];

export default function About() {
  return (
    <section id="about" className={`w-full bg-[#09090b] py-20 ${inter.className}`}>
      <div className="max-w-[930px] mx-auto px-8">

        {/* Section heading */}
       <h2 className="text-3xl font-bold text-white mb-7 mt-16 -ml-12">
          # About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left — bio + cards */}
          <div className="flex-1">
            {/* Description — uniform text color, no highlights */}
           <p className="text-[#a1a1aa] text-lg leading-7 max-w-4xl -ml-12 -mt-1">
              I&apos;m Syed Maaz, a 22-year-old software engineer from
              Lucknow, India. I&apos;m currently pursuing B.Tech in Computer
              Science at IILM University, where I also serve in a leadership
              role with the IEEE IILM chapter. I have a solid grasp of Frontend
              development and a growing command over Backend as well as Web3.
            </p>

            {/* 2x2 cards grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 -ml-12">
              {CARDS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-[#121215] p-4 hover:border-white/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-2 ml-9 mt-1.5">
                    <Icon className="h-4 w-4 text-white/60" />
                    <span className="text-lg font-semibold text-white">
                      {title}
                    </span>
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-5">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo + experience + education + interests */}
          <div className="w-full lg:w-92 rounded-lg border border-white/10 bg-[#121215] p-6 flex flex-col gap-6">

            {/* Photo */}
            <div className="flex justify-center">
              <div className="h-32 w-32 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/pfp.png"
                  alt="Syed Maaz"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full grayscale"
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="text-xs font-mono text-[#a1a1aa] mb-3">
                $ experience
              </p>
              <div className="flex flex-col gap-3">
                {EXPERIENCE.map(({ role, org }) => (
                  <div key={role} className="flex items-start gap-2">
                    <span className="mt-1 text-white/30 text-xs">→</span>
                    <div>
                      <p className="text-sm font-medium text-white">{role}</p>
                      <p className="text-xs text-[#a1a1aa]">{org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="text-xs font-mono text-[#a1a1aa] mb-3">
                $ education
              </p>
              <div className="flex items-start gap-2">
                <span className="mt-1 text-white/30 text-xs">→</span>
                <div>
                  <p className="text-sm font-medium text-white">
                    IILM University
                  </p>
                  <p className="text-xs text-[#a1a1aa]">
                    B.Tech in Computer Science, 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-xs font-mono text-[#a1a1aa] mb-3">
                $ interests
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}