'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { experiences, education } from '@/lib/data'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-14 md:py-16 relative overflow-hidden bg-card/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
              My Professional{' '}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Building impactful products at innovative companies, delivering solutions that scale.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-10 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-2 z-10">
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass-card p-6 md:p-8 glow-effect-hover">
                    {/* Company & Period */}
                    <div className={`flex flex-wrap items-center gap-3 mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted mb-2">{exp.subtitle}</p>
                    {exp.client && (
                      <p
                        className={`text-sm text-primary font-medium mb-2 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        Client: {exp.client}
                      </p>
                    )}
                    
                    {/* Location */}
                    <div className={`flex items-center gap-1 text-sm text-muted mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>

                    {/* Description */}
                    <p className="text-muted mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm text-muted-light ${
                            index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                          }`}
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-card-hover border border-card-border text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="glass-card p-6"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted text-sm">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                        <span className="text-card-border">•</span>
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
