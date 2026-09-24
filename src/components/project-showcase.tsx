"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import type { Project } from "@/types/portfolio";
import { Pill } from "@/components/pill";
import { cn } from "@/lib/utils";

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects]
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition",
              activeCategory === category
                ? "border-accent bg-accent/15 text-white"
                : "border-white/10 bg-white/5 text-mist hover:border-white/20 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-panel/80 shadow-glow"
          >
            <div className="flex h-44 items-end border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(119,224,255,0.18),_transparent_40%),linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-silver">{project.role}</p>
                </div>
                <p className="text-sm text-mist">{project.period}</p>
              </div>

              <p className="text-sm leading-7 text-mist">{project.summary}</p>
              <p className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-silver">
                {project.impact}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>

              <ul className="space-y-3 text-sm leading-7 text-silver">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-flame" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
