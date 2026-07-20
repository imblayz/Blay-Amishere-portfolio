"use client";

import { motion } from "framer-motion";
import { Link2, Globe, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

 const socialLinks = [
  { icon: Link2, href: personalInfo.social.github, label: "GitHub" },
  { icon: Globe, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

  return (
    <footer className="bg-bg-primary border-t border-[rgba(6,182,212,0.15)] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <p className="gradient-text font-space-grotesk font-bold text-lg">
          Designed & Built by Blay Amishere Kwaw
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-text-secondary hover:text-accent-cyan transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          className="btn-secondary flex items-center gap-2 text-sm"
        >
          <ArrowUp size={16} />
          Back to top
        </motion.button>

        <p className="text-text-muted text-xs font-jetbrains-mono">
          © {year} Blay Amishere Kwaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}