import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Camera, Mail, Gift, Cake } from 'lucide-react'

export default function FloatingNavbar({ activeSection, onNavigate }) {
  const navItems = [
    { id: 'welcome', label: 'Welcome', icon: Sparkles },
    { id: 'celebration', label: 'Party', icon: Cake },
    { id: 'memories', label: 'Memories', icon: Camera },
    { id: 'letter', label: 'Letter', icon: Mail },
    { id: 'surprise', label: 'Surprise', icon: Gift },
    { id: 'wish', label: 'Wish', icon: Heart },
  ]

  return (
    <motion.nav
      aria-label="Birthday surprise navigation"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-40 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full glass-panel shadow-xl flex items-center justify-between gap-1 sm:gap-2 border border-[#F8BBD0] max-w-[calc(100vw-1.5rem)]"
    >
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeSection === item.id

        return (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            onClick={() => onNavigate(item.id)}
            aria-label={`Jump to ${item.label}`}
            className={`relative flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-300 min-w-[38px] sm:min-w-[42px] min-h-[38px] ${
              isActive
                ? 'bg-[#AD5577] text-white shadow-md font-semibold'
                : 'text-[#863654] hover:bg-[#FCE4EC]/80 hover:text-[#AD5577]'
            }`}
          >
            <Icon className="w-4 h-4 shrink-0" />
            <span className="hidden md:inline font-poppins">{item.label}</span>
          </button>
        )
      })}
    </motion.nav>
  )
}
