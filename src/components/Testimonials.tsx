'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "Bikash consistently delivered high-quality frontend solutions that exceeded our expectations. His attention to performance optimization and code quality is remarkable. A true professional who understands both technical and business requirements.",
    author: "Tech Lead",
    role: "Divami Design Labs",
    rating: 5,
    avatar: "TL",
  },
  {
    id: 2,
    content: "Working with Bikash on the CRM Campaign Platform was exceptional. His expertise in Angular and API integration helped us deliver a robust omnichannel solution. He's proactive, communicative, and always suggests improvements.",
    author: "Project Manager",
    role: "Phenom People",
    rating: 5,
    avatar: "PM",
  },
  {
    id: 3,
    content: "Bikash's work on the Blue Yonder dashboards was outstanding. He achieved 95% test coverage and significantly improved our Core Web Vitals. His commitment to accessibility and performance is exactly what enterprise projects need.",
    author: "Engineering Manager",
    role: "Client - Blue Yonder",
    rating: 5,
    avatar: "EM",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-14 md:py-16 relative overflow-hidden bg-card/30">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
              What People{' '}
              <span className="gradient-text">Say</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Feedback from colleagues and clients I've had the pleasure of working with.
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card p-8 md:p-10 text-center">
              {/* Quote Icon */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Quote className="w-7 h-7 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Content */}
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-lg md:text-xl text-muted-light leading-relaxed mb-6 italic"
              >
                "{testimonials[activeIndex].content}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonials[activeIndex].avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-sm text-muted">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-card border border-card-border hover:bg-card-hover hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? 'bg-primary w-8'
                        : 'bg-card-hover hover:bg-muted'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-card border border-card-border hover:bg-card-hover hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
