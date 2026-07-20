"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import GlassCard from "@/components/ui/GlassCard";
import { skills, certifications } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// skills & tools"
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {skills.map((category, i) => (
            <GlassCard key={category.category} delay={i * 0.1}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-1 h-6 rounded-full ${
                    category.color === "cyan"
                      ? "bg-accent-cyan"
                      : "bg-accent-purple"
                  }`}
                />
                <h3
                  className="text-text-primary font-semibold text-base"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, j) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={i * 0.05 + j * 0.03}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <span className="font-mono text-accent-cyan text-sm tracking-widest uppercase">
              // certifications
            </span>
            <h3
              className="text-3xl font-bold text-text-primary mt-2"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Certified & Verified
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 text-center group"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4
                  className="text-text-primary font-semibold text-sm mb-1 group-hover:text-accent-cyan transition-colors duration-200"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {cert.name}
                </h4>
                <p className="text-text-muted text-xs font-mono mb-3">
                  {cert.issuer}
                </p>
                <span
                  className={`text-xs font-mono px-2 py-1 rounded-full border ${
                    cert.color === "cyan"
                      ? "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/5"
                      : "text-accent-purple border-accent-purple/30 bg-accent-purple/5"
                  }`}
                >
                  ✓ Verified
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}