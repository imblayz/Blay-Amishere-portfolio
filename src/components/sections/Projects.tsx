"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

const filters = [
  { label: "All", match: () => true },
  {
    label: "Security",
    match: (tech: string[]) =>
      tech.some((t) =>
        ["Kali Linux", "UFW", "SSH", "auditd", "Bash", "Cryptography"].includes(t)
      ),
  },
  {
    label: "Web",
    match: (tech: string[]) =>
      tech.some((t) =>
        ["Next.js", "React", "HTML", "CSS", "Tailwind CSS", "TypeScript", "Framer Motion"].includes(t)
      ),
  },
  {
    label: "Python",
    match: (tech: string[]) => tech.includes("Python"),
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    const filterFn = filters.find((f) => f.label === activeFilter)?.match ?? (() => true);
    return projects.filter((p) => filterFn(p.tech));
  }, [activeFilter]);

  const displayed = showAll ? filtered : filtered.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// my_work"
          title="Projects"
          subtitle="Things I have built — from security tools to web applications"
        />

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {filters.map((f) => {
            const isActive = activeFilter === f.label;
            return (
              <button
                key={f.label}
                onClick={() => {
                  setActiveFilter(f.label);
                  setShowAll(true);
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-mono transition-colors duration-200 border ${
                  isActive
                    ? "text-accent-cyan border-accent-cyan/50 bg-accent-cyan/10"
                    : "text-text-secondary border-accent-cyan/10 hover:border-accent-cyan/30 hover:text-text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-accent-cyan/10 border border-accent-cyan/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} delay={i * 0.05} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {displayed.length === 0 && (
          <p className="text-text-muted text-center font-mono text-sm mb-10">
            No projects in this category yet.
          </p>
        )}

        {/* Show more toggle */}
        {!showAll && filtered.length > displayed.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              Show All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}