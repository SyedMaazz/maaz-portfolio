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
  { role: "Treasurer", org: "IEEE Student Branch, IILM University" },
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
    <section
      id="about"
      className={`w-full bg-[#09090b] py-20 ${inter.className}`}
    >
      <div className="max-w-[1100px] ml-93 px-8">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-white mb-7 mt-15.5 -ml-10">
          # About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-13.5 items-start">
          {/* Left — bio + cards */}
          <div className="flex-none w-[490px]">
            {/* Description */}
            <p className="text-[#a1a1aa] text-lg leading-7 max-w-4xl -ml-[39px] -mt-[2.5px]">
              I&apos;m Syed Maaz, a 22-year-old software engineer from Lucknow,
              India. I&apos;m currently pursuing B.Tech in Computer Science at
              IILM University, where I also serve in a leadership role with the
              IEEE IILM chapter. I have a solid grasp of Frontend development
              and a growing command over Backend as well as Web3.
            </p>

            {/* 2x2 cards grid */}
            <div className="mt-[33px] grid grid-cols-2 gap-x-10 gap-y-[33px] -ml-[39px]">
              {CARDS.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className={`rounded-[1.2rem] border border-white/5 bg-[#121215] p-4 hover:border-white/20 transition-all duration-200 ${
                    index === 0
                      ? "p-4 pt-7.5 w-[106.2%] h-[204px]"
                      : index === 1
                        ? "pl-6 -ml-[1px] h-[186px] w-[106.2%]"
                        : index === 2
                          ? "p-4 pt-7.5 w-[106.2%] h-[186px]"
                          : index === 3
                            ? "pl-6 -ml-[1px] h-[166.5px] w-[106.2%]"
                            : "p-4"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 -mt-3.5 ${index === 1 ? "ml-[2px] mt-0" : index === 3 ? "ml-[2px] mt-0" : "ml-2.5"}`}
                  >
                    <div className="flex items-center justify-center rounded-lg bg-white/8 h-10 w-10">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                   <span className={`font-semibold text-white -mt-0.5 text-lg ${index === 2 ? "mt-[1px]" : index === 3 ? "mt-[1px]" : ""}`}>
  {title}
</span>
                  </div>
                  <p
                    className={`text-[#a1a1aa] leading-[1.55] ${index === 0 ? "text-sm ml-1" : "text-[13px]"}`}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo + experience + education + interests */}
          <div className="w-full lg:w-[377px] h-[641px] rounded-[1.2rem] border border-white/5 bg-[#121215] p-6 flex flex-col gap-6 -mt-0.5">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-white/20 -mt-2">
                <Image
                  src="/pfp.png"
                  alt="Syed Maaz"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full grayscale"
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="text-[15px] font-mono text-[#a1a1aa] mb-4 ml-0.5 -mt-0.5">
                $ experience
              </p>
              <div className="flex flex-col gap-4">
                {EXPERIENCE.map(({ role, org }, index) => (
                  <div
                    key={role}
                    className={`flex items-center gap-3 ${index === 1 ? "mt-2" : ""}`}
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 ml-[15px] mt-[6px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold text-white/90 mt-2">
                        {role}
                      </p>
                      <p
                        className={`text-[14px] text-[#a1a1aa] ${index === 0 ? "max-w-[180px]" : ""}`}
                      >
                        {org}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="text-[15px] font-mono text-[#a1a1aa] mb-4 ml-0.5 mt-2.5">
                $ education
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 ml-[16px] mt-[7px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-white mt-1">
                    IILM University
                  </p>
                  <p className="text-[14px] text-[#a1a1aa]">
                    B.Tech in Computer Science, 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-[15px] font-mono text-[#a1a1aa] mb-4 ml-[5px]">
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
