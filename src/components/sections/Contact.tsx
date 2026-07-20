"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Link2, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactDetails = [
    {
      icon: <Mail size={18} className="text-accent-cyan" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone size={18} className="text-accent-cyan" />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MapPin size={18} className="text-accent-cyan" />,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
    {
      icon: <Globe size={18} className="text-accent-cyan" />,
      label: "Availability",
      value: personalInfo.availability,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// get_in_touch"
          title="Contact Me"
          subtitle="Whether you want to work together, have a question, or just want to say hi — my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact info */}
          <div className="space-y-4">
            {contactDetails.map((detail, i) => (
              <GlassCard key={detail.label} delay={i * 0.1} className="p-5">
  
    <a href={detail.href}
    className="flex items-center gap-4 group"
  >
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-accent-cyan/20 transition-colors duration-200">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-0.5">
                      {detail.label}
                    </p>
                    <p className="text-text-primary text-sm font-medium group-hover:text-accent-cyan transition-colors duration-200">
                      {detail.value}
                    </p>
                  </div>
                </a>
              </GlassCard>
            ))}

            {/* Social links */}
            <div className="glass-card p-5">
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-4">
                Find me on
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Link2 size={20} />,
                    href: personalInfo.social.github,
                    label: "GitHub",
                  },
                  {
                    icon: <Globe size={20} />,
                    href: personalInfo.social.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: <Mail size={20} />,
                    href: `mailto:${personalInfo.email}`,
                    label: "Email",
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-text-muted hover:text-accent-cyan transition-colors duration-200"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-bg-primary border border-accent-cyan/15 rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-200 placeholder:text-text-muted"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-bg-primary border border-accent-cyan/15 rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-200 placeholder:text-text-muted"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-bg-primary border border-accent-cyan/15 rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-200"
                >
                  <option>General Inquiry</option>
                  <option>Hire Me</option>
                  <option>Freelance Project</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-bg-primary border border-accent-cyan/15 rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-200 placeholder:text-text-muted resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={sending || sent}
                className="btn-primary w-full justify-center text-sm"
              >
                {sending ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </>
                ) : sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}