import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart } from 'lucide-react'
import { triggerCelebration } from '../utils/confetti'

export default function SectionWelcome({ onOpenSurprise }) {
  const handleOpen = () => {
    triggerCelebration()
    onOpenSurprise()
  }

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-16 sm:py-20 overflow-x-clip bg-gradient-to-b from-[#FFF8F3] via-[#FCE4EC] to-[#F8BBD0]/40">
      {/* Soft Ambient Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] md:w-[650px] h-[280px] sm:h-[500px] md:h-[650px] bg-gradient-to-tr from-[#F8BBD0]/50 to-[#FCE4EC]/70 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Floating decorative corner badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F8BBD0] shadow-xs text-[#AD5577] text-xs sm:text-sm font-medium tracking-wide"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#AD5577] animate-spin" style={{ animationDuration: '6s' }} />
        <span>A Special Birthday Celebration</span>
        <Heart className="w-3.5 h-3.5 text-[#AD5577] fill-[#AD5577]" />
      </motion.div>

      {/* Main Heading - Responsive on 360px+ screens */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="font-dancing text-5xl sm:text-7xl md:text-8xl text-center text-[#AD5577] drop-shadow-xs font-bold tracking-tight mb-2 sm:mb-4 px-2"
      >
        Hey Nidhi! ❤️
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="font-serif-title italic text-base sm:text-xl md:text-2xl text-center text-[#6e4353] max-w-lg mx-auto px-4 mb-6 sm:mb-8 leading-relaxed font-light"
      >
        “Someone has created a little world just for you...”
      </motion.p>

      {/* Animated Gift Hero Illustration */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative my-2 sm:my-4 group cursor-pointer touch-manipulation"
        onClick={handleOpen}
      >
        {/* Glow backdrop behind gift */}
        <div className="absolute inset-0 bg-[#F8BBD0] rounded-full blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-300 scale-105" />

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1.2, -1.2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          className="relative w-38 h-38 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-white via-[#FFF8F3] to-[#FCE4EC] border-2 border-[#F8BBD0] shadow-xl flex flex-col items-center justify-center p-4 sm:p-6 text-center"
        >
          {/* Decorative ribbon */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-7 sm:h-8 bg-gradient-to-r from-[#F8BBD0] via-[#AD5577] to-[#F8BBD0] opacity-80" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-7 sm:w-8 bg-gradient-to-b from-[#F8BBD0] via-[#AD5577] to-[#F8BBD0] opacity-80" />

          {/* Bow on top */}
          <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl drop-shadow-md">🎀</span>
          </div>

          {/* Center heart emblem */}
          <div className="relative z-10 w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-white shadow-md border border-[#F8BBD0] flex items-center justify-center text-[#AD5577]">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-[#F8BBD0] text-[#AD5577] group-hover:scale-110 transition-transform duration-300" />
          </div>

          <span className="relative z-10 mt-2 sm:mt-3 text-[10px] sm:text-xs font-semibold text-[#863654] uppercase tracking-wider bg-white/90 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
            For You
          </span>
        </motion.div>
      </motion.div>

      {/* Button: Open Your Surprise 🎁 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-6 sm:mt-8 w-full max-w-xs sm:max-w-none flex justify-center"
      >
        <motion.button
          id="open-surprise-btn"
          onClick={handleOpen}
          whileTap={{ scale: 0.95 }}
          className="group relative w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4.5 rounded-full bg-gradient-to-r from-[#AD5577] via-[#863654] to-[#AD5577] text-white font-medium text-base sm:text-xl shadow-xl glow-rose-btn flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-300 min-h-[50px] touch-manipulation"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

          <span className="font-poppins font-medium tracking-wide">Open Your Surprise</span>
          <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">🎁</span>
        </motion.button>
      </motion.div>

      {/* Little warm gift note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-3.5 sm:mt-4 text-xs sm:text-sm text-[#863654]/75 font-poppins text-center px-4"
      >
        A gift lovingly prepared with love & smiles ✨
      </motion.p>
    </section>
  )
}
