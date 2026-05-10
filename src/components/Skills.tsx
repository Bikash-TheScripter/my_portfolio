"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, skillTags } from "@/lib/data";
import { Code2, Server, Wrench, TestTube, Bot, Sparkles } from "lucide-react";

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  ai: Bot,
  tools: Wrench,
  testing: TestTube,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="py-14 md:py-16 relative overflow-hidden bg-card/30"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A comprehensive toolkit built over 4+ years of hands-on experience
              in building enterprise applications.
            </p>
          </motion.div>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {Object.entries(skills).map(([key, category], index) => {
              const IconComponent =
                categoryIcons[key as keyof typeof categoryIcons];
              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="glass-card p-6 md:p-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-muted-light group-hover:text-foreground transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-card-hover rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${skill.level}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1,
                              delay: 0.2 + index * 0.1,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* All Skills Cloud */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Complete Tech Stack
              </h3>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {skillTags.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: index * 0.02 },
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.3)",
                  }}
                  className="skill-badge cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Core Strengths */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid sm:grid-cols-3 gap-4"
          >
            {[
              {
                title: "Frontend Excellence",
                description:
                  "React, Next.js, Angular, and TypeScript for type-safe, scalable user interfaces",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                title: "Full-Stack Capable",
                description:
                  "Node.js, REST/GraphQL APIs, and MongoDB for end-to-end feature ownership",
                gradient: "from-indigo-500/20 to-purple-500/20",
              },
              {
                title: "AI-Augmented & Quality-First",
                description:
                  "Cursor, prompt engineering, 95%+ test coverage, and Core Web Vitals optimization",
                gradient: "from-emerald-500/20 to-teal-500/20",
              },
            ].map((strength) => (
              <motion.div
                key={strength.title}
                className={`p-6 rounded-2xl bg-gradient-to-br ${strength.gradient} border border-card-border`}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {strength.title}
                </h4>
                <p className="text-sm text-muted">{strength.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
