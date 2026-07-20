"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link2, Globe, Mail, MapPin, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = personalInfo.titles[titleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIndex]);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Link2 size={20} />, href: personalInfo.social.github, label: "GitHub" },
    { icon: <Globe size={20} />, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  // Fake terminal lines for the decorative visual
  const terminalLines = [
    { text: "$ whoami", color: "text-accent-cyan" },
    { text: "> blay_amishere_kwaw", color: "text-text-secondary" },
    { text: "$ cat skills.json", color: "text-accent-cyan" },
    { text: '> ["Python", "React", "Security"]', color: "text-text-secondary" },
    { text: "$ status", color: "text-accent-cyan" },
    { text: "> available_for_hire: true", color: "text-accent-purple" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden py-32"
    >
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/3 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column — text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="text-text-muted font-mono text-sm tracking-widest">
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold mb-4 gradient-text leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-10 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="font-mono text-xl md:text-2xl text-accent-cyan">
                {displayed}
                <span className="animate-blink">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-1 text-text-muted text-sm mb-10"
            >
              <MapPin size={14} className="text-accent-cyan" />
              <span>{personalInfo.location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary text-base w-full sm:w-auto justify-center"
              >
                View My Work
              </motion.button>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "#06B6D4",
                  boxShadow: "0 0 20px rgba(6,182,212,0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf"
                download
                className="btn-secondary text-base w-full sm:w-auto justify-center"
              >
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#06B6D4", y: -3 }}
                  className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right column — decorative terminal visual */}
          {/* TODO: swap this block for your photo later — e.g. wrap an <img> in the same
              motion.div with a gradient ring / glow treatment */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow behind the card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl blur-2xl" />

              <div className="relative glass-card rounded-xl overflow-hidden border border-accent-cyan/20 shadow-glow-lg">
                {/* Fake window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-accent-cyan/10 bg-bg-tertiary/50">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="ml-3 text-text-muted text-xs font-mono">
                    portfolio.sh
                  </span>
                </div>

                {/* Terminal body */}
                <div className="p-6 font-mono text-sm space-y-3 min-h-[280px]">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 + i * 0.25 }}
                      className={line.color}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + terminalLines.length * 0.25 }}
                    className="inline-block text-accent-cyan animate-blink"
                  >
                    $ _
                  </motion.span>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card px-4 py-3 rounded-lg border border-accent-purple/30 shadow-glow-purple"
              >
                <span className="text-xs font-mono text-accent-purple">
                  🛡️ Securing systems
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-cyan transition-colors duration-200"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}