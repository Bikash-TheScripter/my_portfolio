'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Layout, 
  Smartphone, 
  Gauge, 
  Code2, 
  Server,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building modern, pixel-perfect user interfaces with React.js, Next.js, Angular, and TypeScript that scale to enterprise needs.',
    features: ['React.js / Next.js / Angular', 'TypeScript & Modern JS', 'Reusable Component Libraries'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Full-Stack Web Development',
    description: 'Connecting beautiful UIs to robust backends with Node.js, REST, and GraphQL APIs — owning features end-to-end.',
    features: ['Node.js & Express', 'REST & GraphQL APIs', 'MongoDB & Data Modeling'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive UI Engineering',
    description: 'Crafting mobile-first, accessible interfaces that look and feel great across every device and screen size.',
    features: ['Mobile-First Design', 'WCAG 2.1 Accessibility', 'Cross-Browser Support'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Optimizing Core Web Vitals with code splitting, caching, and lazy loading strategies for blazing-fast experiences.',
    features: ['Core Web Vitals', 'Bundle Optimization', 'Caching Strategies'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Sparkles,
    title: 'Prompt Engineering',
    description: 'Designing reliable prompts and prompt chains for product features that integrate LLMs into real-world workflows.',
    features: ['System Prompt Design', 'Few-Shot & CoT Patterns', 'AI-Driven Messaging'],
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Code2,
    title: 'AI-Augmented Development',
    description: 'Shipping faster and with higher quality using Cursor, GitHub Copilot, and modern AI-assisted developer workflows.',
    features: ['Cursor Workflows', 'AI-Assisted Refactors', 'Automated Code Quality'],
    gradient: 'from-emerald-500 to-teal-500',
  },
]

export default function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-14 md:py-16 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
              Services I{' '}
              <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Specialized in delivering end-to-end frontend solutions that drive business impact and delight users.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass-card p-6 md:p-8 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}
                >
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-light"
                    >
                      <ArrowRight className="w-3 h-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  style={{ mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
