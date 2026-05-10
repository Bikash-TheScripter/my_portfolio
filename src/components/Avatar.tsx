"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePhoto from "../../public/profile.jpg";

export default function Avatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-emerald-500/30 blur-2xl"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Avatar container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40"
      >
        {/* Rotating gradient border */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #6366f1, #06b6d4, #10b981, #6366f1)",
            padding: "2px",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full bg-background" />
        </motion.div>

        {/* Inner avatar surface */}
        <div className="absolute inset-[6px] rounded-full overflow-hidden bg-gradient-to-br from-card via-background to-card shadow-2xl">
          {/* Subtle radial highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(99,102,241,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.18),transparent_60%)]" />

          {/* Profile photo with fallback */}
          {!imageError ? (
            <Image
              src={profilePhoto}
              alt="Bikash portrait"
              fill
              sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
              className="relative w-full h-full object-cover object-center"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <span
                className="select-none font-bold tracking-tight bg-gradient-to-br from-white via-primary-light to-accent bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(2.75rem, 8vw, 4rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                BT
              </span>
            </div>
          )}

          {/* Inner ring shine */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        </div>

        {/* Availability indicator */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 flex items-center justify-center"
        >
          <span className="absolute h-4 w-4 md:h-5 md:w-5 rounded-full bg-emerald-500/40 animate-ping" />
          <span className="relative h-3 w-3 md:h-3.5 md:w-3.5 rounded-full bg-emerald-500 ring-2 ring-background" />
        </motion.div>
      </motion.div>
    </div>
  );
}
