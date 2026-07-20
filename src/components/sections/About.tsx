"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// about_me"
          title="About Me"
          subtitle="A little bit about who I am and what I do"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Avatar and stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative w-48 h-48 rounded-2xl gradient-border overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Blay Amishere Kwaw"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Online indicator */}
              <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 bg-bg-secondary border border-accent-cyan/20 rounded-full px-3 py-1 z-10">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-text-secondary font-mono">
                  Available
                </span>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 8px 24px rgba(6, 182, 212, 0.15)",
                  }}
                  className="glass-card p-4 text-center transition-shadow duration-300"
                >
                  <div
                    className="text-3xl font-bold gradient-text mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick info */}
            <div className="glass-card p-6 w-full space-y-3">
              {[
                {
                  icon: <GraduationCap size={16} className="text-accent-cyan" />,
                  text: "BSc Computer Science — Kaaf University (2027)",
                },
                {
                  icon: <Briefcase size={16} className="text-accent-cyan" />,
                  text: "Cybersecurity Intern (Current)",
                },
                {
                  icon: <MapPin size={16} className="text-accent-cyan" />,
                  text: personalInfo.location,
                },
                {
                  icon: <Mail size={16} className="text-accent-cyan" />,
                  text: personalInfo.email,
                },
                {
                  icon: <Phone size={16} className="text-accent-cyan" />,
                  text: personalInfo.phone,
                },
                {
                  icon: <Globe size={16} className="text-accent-cyan" />,
                  text: personalInfo.availability,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-text-secondary text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {personalInfo.longBio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-text-secondary leading-relaxed text-base"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-l-2 border-accent-cyan pl-4 mt-8"
            >
              <p className="text-accent-cyan/80 italic text-base font-mono">
                &quot;The best developers are those who understand both how
                systems are built and how they can be broken.&quot;
              </p>
            </motion.blockquote>

            <div className="mt-8">
              <p className="text-text-muted text-sm font-mono mb-3 uppercase tracking-widest">
                Areas of Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Development",
                  "Web Development",
                  "Artificial Intelligence",
                  "Cybersecurity",
                  "Digital Marketing",
                  "Automation",
                ].map((interest, i) => (
                  <SkillBadge key={interest} name={interest} delay={i * 0.05} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}