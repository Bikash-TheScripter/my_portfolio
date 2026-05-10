'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Layout, Sparkles, Zap } from 'lucide-react'
import { aboutContent } from '@/lib/data'

const highlights = [
  {
    icon: Layout,
    title: 'Frontend Excellence',
    description: 'React, Next.js, Angular, TypeScript — building polished, scalable UIs',
  },
  {
    icon: Code2,
    title: 'Full-Stack Capable',
    description: 'Node.js, REST/GraphQL APIs, MongoDB — owning features end-to-end',
  },
  {
    icon: Sparkles,
    title: 'Prompt Engineering',
    description: 'Designing reliable prompts for AI-driven product features',
  },
  {
    icon: Zap,
    title: 'Performance & Quality',
    description: '95%+ test coverage, Core Web Vitals, and WCAG accessibility',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-14 md:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
              Passionate about building{' '}
              <span className="gradient-text">exceptional experiences</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                {aboutContent.intro}
              </p>
              <p className="text-muted leading-relaxed">
                {aboutContent.description}
              </p>
              
              {/* Highlights List */}
              <ul className="space-y-3 mt-6">
                {aboutContent.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-muted-light">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Stats/Highlights Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 glow-effect-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
