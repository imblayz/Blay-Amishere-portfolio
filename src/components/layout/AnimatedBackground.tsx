"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Terminal, Code2, Cpu, Wifi } from "lucide-react";

const floatingIcons = [
  { Icon: Shield, top: "12%", left: "8%", size: 28, duration: 14, delay: 0 },
  { Icon: Terminal, top: "68%", left: "5%", size: 24, duration: 16, delay: 2 },
  { Icon: Lock, top: "25%", left: "88%", size: 22, duration: 15, delay: 1 },
  { Icon: Code2, top: "55%", left: "92%", size: 26, duration: 18, delay: 3 },
  { Icon: Cpu, top: "85%", left: "80%", size: 24, duration: 17, delay: 0.5 },
  { Icon: Wifi, top: "40%", left: "3%", size: 20, duration: 13, delay: 4 },
];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dot grid — circuit style */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Large slow gradient mesh blobs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-accent-cyan/[0.04] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[8%] w-[600px] h-[600px] bg-accent-purple/[0.04] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 50, -70, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[30%] w-[450px] h-[450px] bg-accent-cyan/[0.03] rounded-full blur-3xl"
      />

      {/* Faint drifting icons */}
      {floatingIcons.map(({ Icon, top, left, size, duration, delay }, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-accent-cyan"
          style={{ top, left }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
}