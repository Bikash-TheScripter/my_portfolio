"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-card-border bg-card/50">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block text-2xl font-bold gradient-text mb-2"
              whileHover={{ scale: 1.05 }}
            >
              BT
            </motion.a>
            <p className="text-sm text-muted">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted mt-1 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />{" "}
              using Next.js & Tailwind CSS
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card-hover transition-all"
              whileHover={{ scale: 1.1 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card-hover transition-all"
              whileHover={{ scale: 1.1 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card-hover transition-all"
              whileHover={{ scale: 1.1 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>

            <div className="w-px h-6 bg-card-border mx-2" />

            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
