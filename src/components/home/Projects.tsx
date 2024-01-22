"use client";

import { useEffect, useRef } from "react";

import ProjectCard from "../ProjectCard";
import Container from "./../Container";

import { PROJECTS } from "@/config";

const Projects: React.FC = () => {
  const cards = useRef<HTMLInputElement | null>(null);
  //const card = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    cards?.current?.addEventListener("mousemove", (event) => {
      var children = cards?.current?.children;
      if (children) {
        for (var i = 0; i < children.length; i++) {
          var card = children[i] as HTMLElement;
          const rect = card.getBoundingClientRect(),
            x = event.clientX - rect.left,
            y = event.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    });
  }, []);

  return (
    <div id="projects" className="pt-32 bg-[#010c13]">
      <Container>
        <div className="flex flex-col justify-start items-center gap-6">
          <h5 className="isolate px-4 py-2 rounded-3xl bg-white/5 shadow-lg ring-1 ring-black/5 backdrop-blur-sm uppercase">
            Exceed Success
          </h5>
          <h2 className="text-center text-[40px] leading-[48px] sm:text-5xl font-bold tracking-[-0.02em] sm:leading-[80px] mb-3">
            Our Projects
          </h2>
          <div
            className="hyper_cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center w-full md:px-3 lg:px-0"
            ref={cards}
          >
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.label}
                label={project.label}
                description={project.description}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
