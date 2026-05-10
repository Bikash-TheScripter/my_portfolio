import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import About from '@/components/About'
import Services from '@/components/Services'
import StatsSection from '@/components/StatsSection'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingActions from '@/components/FloatingActions'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <StatsSection />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <CTASection />
        <Contact />
        <Footer />
        <FloatingActions />
      </main>
    </>
  )
}
