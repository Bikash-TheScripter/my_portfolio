import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bikash Tripathy | Full-Stack Developer (Frontend-Focused)',
  description: 'Full-Stack Developer with a strong frontend focus and 4+ years of experience building performant, scalable web applications using React.js, Next.js, TypeScript, Angular, and Node.js. Skilled in prompt engineering and AI-augmented development with Cursor.',
  keywords: [
    'Full-Stack Developer', 'Frontend Developer', 'React.js', 'Next.js',
    'TypeScript', 'Angular', 'Node.js', 'Prompt Engineering',
    'Cursor', 'GitHub Copilot', 'Bikash Tripathy', 'Web Developer', 'Hyderabad'
  ],
  authors: [{ name: 'Bikash Tripathy' }],
  creator: 'Bikash Tripathy',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bikash-tripathy.dev',
    title: 'Bikash Tripathy | Full-Stack Developer (Frontend-Focused)',
    description: 'Full-Stack Developer (frontend-focused) building performant, scalable web apps with React, Next.js, Angular, and Node.js — augmented by prompt engineering and Cursor.',
    siteName: 'Bikash Tripathy Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bikash Tripathy - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bikash Tripathy | Full-Stack Developer (Frontend-Focused)',
    description: 'Full-Stack Developer (frontend-focused) building performant, scalable web apps with React, Next.js, Angular, and Node.js — augmented by prompt engineering and Cursor.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
