"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding grid-bg">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="// experience"
          title="Experience"
          subtitle="Where I have worked and learned"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-cyan opacity-30 hidden md:block" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-6 hidden md:block">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      item.color === "cyan"
                        ? "border-accent-cyan bg-accent-cyan/20"
                        : "border-accent-purple bg-accent-purple/20"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.color === "cyan"
                          ? "bg-accent-cyan"
                          : "bg-accent-purple"
                      }`}
                    />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 group"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                            item.color === "cyan"
                              ? "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/5"
                              : "text-accent-purple border-accent-purple/30 bg-accent-purple/5"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`font-semibold text-sm mt-0.5 ${
                          item.color === "cyan"
                            ? "text-accent-cyan"
                            : "text-accent-purple"
                        }`}
                      >
                        {item.company}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 text-right shrink-0">
                      <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono justify-end">
                        <Calendar size={12} />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono justify-end">
                        <MapPin size={12} />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-accent-cyan/20 to-transparent mb-4" />

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: j * 0.05 }}
                        className="flex items-start gap-3 text-text-secondary text-sm"
                      >
                        <span className="text-accent-cyan mt-1.5 shrink-0">
                          <Briefcase size={12} />
                        </span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}