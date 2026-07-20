"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon?: string;
  delay?: number;
}

export default function SkillBadge({ name, icon, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.4,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
        backgroundColor: "rgba(6, 182, 212, 0.15)",
        borderColor: "rgba(6, 182, 212, 0.4)",
        color: "#06B6D4",
        boxShadow: "0 4px 16px rgba(6, 182, 212, 0.2)",
      }}
      className="skill-badge cursor-default"
    >
      {icon && <span>{icon}</span>}
      {name}
    </motion.span>
  );
}