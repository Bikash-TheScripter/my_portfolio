"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { end: 4, suffix: "+", label: "Years Experience", decimals: 0 },
  { end: 15, suffix: "+", label: "Projects Delivered", decimals: 0 },
  { end: 95, suffix: "%", label: "Test Coverage", decimals: 0 },
  { end: 60, suffix: "%", label: "Performance Gains", decimals: 0 },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-emerald-500/5" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={stat.label}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals}
                duration={2 + index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
