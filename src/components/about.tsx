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
  { role: "IEEE EPS Chair", org: "IEEE IILM Chapter" },
  { role: "Discipline Committee Member", org: "IILM University" },
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
    <section id="about" className={`w-full bg-black py-20 ${inter.className}`}>
      <div className="max-w-4xl mx-auto px-8">

        {/* Section heading */}
        <h2 className="text-2xl font-bold text-white mb-8">
          <span className="text-white/40"># </span>About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left — bio + cards */}
          <div className="flex-1">
            <p className="text-white/50 text-sm leading-7 max-w-lg">
              I&apos;m Syed Maaz, a 21-year-old software engineer from{" "}
              <span className="text-white/80">Lucknow, India</span>. I&apos;m
              currently pursuing B.Tech in Computer Science at{" "}
              <span className="text-white/80">IILM University</span>, where I
              also serve in a leadership role with the{" "}
              <span className="text-white/80">IEEE IILM chapter</span>. I have
              a solid grasp of{" "}
              <span className="text-white/80">Frontend development</span> and a
              growing command over{" "}
              <span className="text-white/80">Backend as well as Web3</span>.
            </p>

            {/* 2x2 cards grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {CARDS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-4 w-4 text-white/60" />
                    <span className="text-sm font-semibold text-white">
                      {title}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 leading-5">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo + experience + education + interests */}
          <div className="w-full lg:w-72 flex flex-col gap-6">

            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
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
              <p className="text-xs font-mono text-white/30 mb-3">
                $ experience
              </p>
              <div className="flex flex-col gap-3">
                {EXPERIENCE.map(({ role, org }) => (
                  <div key={role} className="flex items-start gap-2">
                    <span className="mt-1 text-white/30 text-xs">→</span>
                    <div>
                      <p className="text-sm font-medium text-white/80">{role}</p>
                      <p className="text-xs text-white/30">{org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="text-xs font-mono text-white/30 mb-3">
                $ education
              </p>
              <div className="flex items-start gap-2">
                <span className="mt-1 text-white/30 text-xs">→</span>
                <div>
                  <p className="text-sm font-medium text-white/80">
                    IILM University
                  </p>
                  <p className="text-xs text-white/30">
                    B.Tech in Computer Science, 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-xs font-mono text-white/30 mb-3">
                $ interests
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/50"
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