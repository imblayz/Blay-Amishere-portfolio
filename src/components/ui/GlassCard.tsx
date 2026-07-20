"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={
        hover
          ? {
              y: -6,
              borderColor: "rgba(6, 182, 212, 0.45)",
              boxShadow:
                "0 12px 40px rgba(6, 182, 212, 0.18), 0 0 0 1px rgba(6, 182, 212, 0.1)",
            }
          : {}
      }
      className={`glass-card p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}