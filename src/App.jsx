import React, { useState, useEffect } from 'react'
import FloatingParticles from './components/FloatingParticles'
import MusicPlayer from './components/MusicPlayer'
import SectionWelcome from './components/SectionWelcome'
import SectionCelebration from './components/SectionCelebration'
import SectionMemories from './components/SectionMemories'
import SectionLetter from './components/SectionLetter'
import SectionSurprise from './components/SectionSurprise'
import SectionWish from './components/SectionWish'
import FloatingNavbar from './components/FloatingNavbar'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('welcome')
  const [isAudioStarted, setIsAudioStarted] = useState(false)

  // Track which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'celebration', 'memories', 'letter', 'surprise', 'wish']
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(`${sections[i]}-section`)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenSurprise = () => {
    setIsAudioStarted(true)
    const celebrationEl = document.getElementById('celebration-section')
    if (celebrationEl) {
      celebrationEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId)
    const el = document.getElementById(`${sectionId}-section`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#FFF8F3] text-[#3d2b33] overflow-x-clip selection:bg-[#F8BBD0] selection:text-[#AD5577]">
      {/* Continuous Ambient Romantic Particles & Sparkles */}
      <FloatingParticles />

      {/* Floating Music Controller */}
      <MusicPlayer isAutoStartTriggered={isAudioStarted} />

      {/* Section 1: Welcome Screen */}
      <div id="welcome-section">
        <SectionWelcome onOpenSurprise={handleOpenSurprise} />
      </div>

      {/* Section 2: Birthday Celebration */}
      <div id="celebration-section">
        <SectionCelebration />
      </div>

      {/* Section 3: Her Beautiful Memories (With all 4 personal uploaded photographs) */}
      <div id="memories-section">
        <SectionMemories />
      </div>

      {/* Section 4: A Special Letter for Nidhi 💌 */}
      <div id="letter-section">
        <SectionLetter />
      </div>

      {/* Section 5: Interactive Birthday Surprise 🎁 */}
      <div id="surprise-section">
        <SectionSurprise />
      </div>

      {/* Section 6: Make a Wish 🎂 */}
      <div id="wish-section">
        <SectionWish />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Quick Navigator */}
      <FloatingNavbar activeSection={activeSection} onNavigate={handleNavigate} />
    </div>
  )
}
