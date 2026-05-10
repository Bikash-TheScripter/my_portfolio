'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  X,
  FileText,
  Linkedin,
  Mail,
  ArrowUpRight,
} from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = personalInfo.phone.replace(/\D/g, '')
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Bikash, I saw your portfolio and I'd like to connect."
  )}`

  const actions = [
    {
      icon: FileText,
      label: 'Download Resume',
      hint: 'Get a quick overview of my work',
      href: personalInfo.resumeUrl,
      download: 'Bikash_Resume.pdf',
      iconWrap: 'bg-primary/15 text-primary',
    },
    {
      icon: Mail,
      label: 'Email Me',
      hint: 'Best for detailed project discussion',
      href: `mailto:${personalInfo.email}`,
      iconWrap: 'bg-emerald-500/15 text-emerald-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      hint: 'Connect and message me directly',
      href: personalInfo.linkedin,
      target: '_blank',
      iconWrap: 'bg-sky-500/15 text-sky-400',
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-[290px] max-w-[78vw] rounded-2xl border border-card-border bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-2 border-b border-card-border/70">
              <p className="text-sm font-semibold text-foreground">
                Let&apos;s connect
              </p>
              <p className="text-xs text-muted mt-0.5">
                Choose the fastest way to reach me
              </p>
            </div>

            <div className="p-2 space-y-1.5">
              {actions.map((action, index) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  download={action.download}
                  target={action.target}
                  rel={action.target ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 14 }}
                  transition={{ delay: index * 0.04 }}
                  className="group flex items-center justify-between gap-3 rounded-xl p-3 hover:bg-card-hover transition-all"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`h-10 w-10 rounded-lg flex items-center justify-center ${action.iconWrap}`}
                    >
                      <action.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground leading-tight">
                        {action.label}
                      </p>
                      <p className="text-xs text-muted truncate">{action.hint}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
                </motion.a>
              ))}
            </div>

            <div className="px-4 pb-4 pt-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold text-center py-2.5 hover:opacity-95 transition-opacity"
              >
                Start a Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <div className="relative">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 hidden sm:block"
            >
              <span className="whitespace-nowrap rounded-full border border-card-border bg-card/90 px-3 py-1.5 text-xs font-medium text-muted shadow-lg backdrop-blur-sm">
                Let&apos;s chat
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-4 rounded-full shadow-xl transition-colors ${
            isOpen
              ? 'bg-card-hover border border-card-border text-foreground'
              : 'bg-gradient-to-r from-primary to-accent text-white'
          }`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          aria-label={isOpen ? 'Close menu' : 'Open quick actions'}
        >
          {!isOpen && (
            <>
              <span className="absolute -inset-1.5 rounded-full bg-primary/30 blur-md animate-pulse" />
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-background" />
            </>
          )}
          <span className="relative">
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </span>
        </motion.button>
      </div>
    </div>
  )
}
