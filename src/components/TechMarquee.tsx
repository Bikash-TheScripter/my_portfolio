'use client'

import { motion } from 'framer-motion'

const technologies = [
  { name: 'React.js', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'Node.js', color: '#339933' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Redux', color: '#764ABC' },
  { name: 'Material UI', color: '#007FFF' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Cursor', color: '#00d1ff' },
  { name: 'GitHub Copilot', color: '#9b59b6' },
  { name: 'Prompt Engineering', color: '#a855f7' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Jest', color: '#C21325' },
  { name: 'Git', color: '#F05032' },
]

export default function TechMarquee() {
  return (
    <section className="py-6 md:py-8 overflow-hidden border-y border-card-border bg-card/20">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-card-border whitespace-nowrap hover:border-primary/50 hover:bg-card-hover transition-all cursor-default"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
              <span className="text-sm font-medium text-muted-light">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
