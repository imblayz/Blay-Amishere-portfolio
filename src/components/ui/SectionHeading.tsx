"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const cleanLabel = label.replace(/^\/\/\s*/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <motion.span
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-mono text-accent-cyan text-sm uppercase mb-3 block"
      >
        {cleanLabel}
      </motion.span>

      <h2
        className="font-heading text-4xl md:text-5xl font-bold mb-4 gradient-text"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        {title}
      </h2>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 56, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-[3px] rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple mb-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />

      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}