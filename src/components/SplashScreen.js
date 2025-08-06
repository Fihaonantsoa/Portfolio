"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const letters = "Fihaonantsoa".split("");
const directions = ["top", "bottom", "left", "right", "top", "bottom", "left", "right", "top", "bottom", "left"];

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const getInitial = (dir) => {
    switch (dir) {
      case "top":
        return { y: -100, opacity: 0 };
      case "bottom":
        return { y: 100, opacity: 0 };
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      default:
        return {};
    }
  };

  const octogonPoints = `
    30,0 70,0 100,30 100,70
    70,100 30,100 0,70 0,30
  `;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Octogone avec F au centre */}
          <div className="relative w-[120px] h-[120px] mb-10">
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute top-0 left-0 w-full h-full"
            >
              <motion.polygon
                points={octogonPoints}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.svg>

            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold"
              style={{fontFamily: 'Monotype Corsiva', color: "#38bdf8"}}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              F
            </motion.div>
          </div>

          {/* Animation du mot Fihaonantsoa */}
          <div className="flex flex-wrap justify-center space-x-1 text-4xl font-bold">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                style={{fontFamily: 'Monotype Corsiva', color: "#38bdf8"}}
                initial={getInitial(directions[i % directions.length])}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.07 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}