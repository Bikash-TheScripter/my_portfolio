"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Lightbulb,
  Target,
  Zap,
  Shield,
} from "lucide-react";
import { projects, personalInfo } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-14 md:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
              Work that makes an <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A showcase of enterprise solutions I've built, focusing on
              scalability, performance, and user experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="glass-card overflow-hidden glow-effect-hover"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                        Featured Project
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-muted mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Case Study Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Target className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            The Challenge
                          </h4>
                          <p className="text-sm text-muted">
                            {project.challenge}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Lightbulb className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            The Solution
                          </h4>
                          <p className="text-sm text-muted">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Zap className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            The Impact
                          </h4>
                          <ul className="space-y-1">
                            {project.impact.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted flex items-center gap-2"
                              >
                                <ChevronRight className="w-3 h-3 text-emerald-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </motion.a>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More CTA */}
          <motion.div variants={itemVariants} className="text-center mt-10">
            <p className="text-muted mb-4">
              These are enterprise projects. More personal projects coming soon!
            </p>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
