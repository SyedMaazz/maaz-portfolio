"use client";

import Image from "next/image";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PROJECTS = [
  {
    title: "Weathernaut",
    description:
      "A modern weather application providing real-time weather data and forecasts with an intuitive user...",
    tags: ["JavaScript", "React", "Weather API", "CSS"],
    image: "/projects/weathernaut.gif",
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    title: "Vayo",
    description:
      "Comprehensive telematics solution for fleet management and road transport optimization.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/Vayo.avif",
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    title: "Evalis",
    description:
      "Intelligent platform for automated code assessment and evaluation using advanced AI algorithms.",
    tags: ["JavaScript", "AI", "Node.js", "React"],
    image: "/projects/Evalis.avif",
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    title: "Cogito Chatbot",
    description:
      "Advanced conversational AI chatbot designed to provide intelligent and contextual responses.",
    tags: ["AI", "NLP", "React", "Node.js"],
    image: "/projects/cogito.png",
    codeUrl: "https://github.com/",
    liveUrl: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className={`w-full bg-[#000000] py-20 ${inter.className}`}
    >
      <div className="max-w-[1153px] mx-auto px-8 mt-26 ml-67">
        <h2 className="text-3xl font-bold text-white mb-4">
          # Featured Projects
        </h2>

        <p className="text-[#a1a1aa] text-base leading-6 max-w-2xl ml-[1px] mt-[17px]">
          A showcase of my recent projects spanning AI-powered applications,
          modern web solutions, and intelligent automation tools. Each project
          represents my passion for building innovative technology.
        </p>

        <a
          href="#"
          className="mt-6 ml-[1px] inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-[7px] text-sm font-medium text-white hover:bg-white/5 transition-all duration-200"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-12 ml-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(
            ({ title, description, tags, image, codeUrl, liveUrl }) => (
              <div
                key={title}
                className="rounded-lg border border-white/5 bg-[#121215] overflow-hidden hover:border-white/20 transition-all duration-200 flex flex-col h-[502px]"
              >
                <div className="relative w-full h-[190px] bg-[#1a1a1d]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[19.5px] font-bold text-white mb-2 mt-1 ml-1">
                    {title}
                  </h3>
                  <p className="text-[16px] text-[#a1a1aa] leading-6 mt-9 mb-1 flex-2 mt-2">
                    {description}
                  </p>

                  <div className="flex flex-nowrap gap-2 mb-15 ml-1 overflow-hidden">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-[9px] py-0.5 text-[12.1px] font-medium text-white whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-around pt-2">
                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-white/100 hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-white/100 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
