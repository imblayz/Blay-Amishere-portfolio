"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link2, ExternalLink } from "lucide-react";
import { MouseEvent } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  github: string;
  live: string;
  featured?: boolean;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  tech,
  icon,
  github,
  live,
  featured = false,
  delay = 0,
}: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 50px rgba(6, 182, 212, 0.2), 0 0 0 1px rgba(6, 182, 212, 0.15)",
        }}
        className="glass-card p-6 flex flex-col h-full group relative overflow-hidden"
      >
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-accent-cyan to-accent-purple opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {featured && (
          <span className="absolute top-4 right-4 text-xs font-mono text-accent-cyan border border-accent-cyan/30 px-2 py-1 rounded-full bg-accent-cyan/5">
            Featured
          </span>
        )}

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="text-4xl mb-4 w-fit"
          style={{ transform: "translateZ(30px)" }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors duration-300"
          style={{ fontFamily: "Space Grotesk, sans-serif", transform: "translateZ(20px)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-accent-cyan/70 bg-accent-cyan/5 border border-accent-cyan/15 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          
            <a href={github}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200"
          >
            <Link2 size={16} />
            GitHub
          </a>

          
            <a href={live}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200"
          >
            <ExternalLink size={16} />
            View Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}