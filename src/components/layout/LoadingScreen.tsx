"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "Initializing portfolio...",
  "Loading modules...",
  "Establishing secure connection...",
  "Welcome.",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < bootLines.length - 1) {
      const timeout = setTimeout(() => setLineIndex((i) => i + 1), 400);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-bg-primary flex items-center justify-center"
        >
          <div className="font-mono text-left w-72">
            {bootLines.slice(0, lineIndex + 1).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  i === bootLines.length - 1
                    ? "text-accent-cyan text-lg mt-2"
                    : "text-text-secondary text-sm"
                }
              >
                {i === bootLines.length - 1 ? "> " : "$ "}
                {line}
              </motion.p>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-accent-cyan ml-1 align-middle"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}