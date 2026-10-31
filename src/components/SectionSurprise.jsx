import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Sparkles, Heart, RotateCcw } from 'lucide-react'
import { triggerCelebration } from '../utils/confetti'

export default function SectionSurprise() {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpenGift = () => {
    if (!isOpened) {
      triggerCelebration()
      setIsOpened(true)
    }
  }

  const handleReset = (e) => {
    e.stopPropagation()
    setIsOpened(false)
  }

  return (
    <section id="surprise-section" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-14 sm:py-20 overflow-hidden bg-gradient-to-b from-[#FFF8F3] via-[#FCE4EC]/50 to-[#FFF8F3]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#F8BBD0]/50 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-2xl mx-auto w-full relative z-20 flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F8BBD0] text-[#AD5577] text-xs sm:text-sm font-medium shadow-xs mb-2.5"
        >
          <Gift className="w-3.5 h-3.5 text-[#AD5577]" />
          <span>Tap To Unwrap</span>
          <Sparkles className="w-3.5 h-3.5 text-[#AD5577]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-dancing text-4xl sm:text-6xl md:text-7xl text-[#AD5577] font-bold tracking-tight mb-2 px-2"
        >
          An Interactive Surprise 🎁
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif-title italic text-sm sm:text-xl text-[#6e4353] font-light mb-8 max-w-md px-4"
        >
          {isOpened
            ? '“A heartfelt wish, wrapped especially for you...”'
            : '“Tap the box below to see what Pravesh has in store for you...”'}
        </motion.p>

        {/* Interactive Gift Box Experience */}
        <div className="relative flex flex-col items-center justify-center my-4 min-h-[320px] sm:min-h-[360px] w-full">
          {/* Revealed Surprise Message Card */}
          <AnimatePresence>
            {isOpened && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: -30 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ type: 'spring', damping: 14, stiffness: 120 }}
                className="relative z-30 w-[92vw] max-w-md p-5 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#F8BBD0] shadow-2xl glow-soft-pink"
              >
                <div className="flex items-center justify-center gap-1.5 mb-2.5">
                  <Sparkles className="w-4 h-4 text-[#F5B041] animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="font-poppins uppercase tracking-wider text-[11px] font-bold text-[#AD5577]">
                    Special Surprise
                  </span>
                  <Sparkles className="w-4 h-4 text-[#F5B041] animate-spin" style={{ animationDuration: '4s' }} />
                </div>

                {/* Exact user requested message */}
                <h3 className="font-serif-title text-xl sm:text-3xl md:text-4xl font-bold text-[#AD5577] leading-snug mb-3 px-2">
                  Surprise Nidhi! You deserve all the happiness in the world. ❤️
                </h3>

                <p className="font-poppins text-xs sm:text-sm text-[#863654] font-light leading-relaxed mb-4 px-2">
                  May your days always be filled with warmth, genuine smiles, endless laughter, and countless little reasons to celebrate.
                </p>

                {/* Button to wrap again */}
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFF0F5] hover:bg-[#FCE4EC] active:scale-95 text-[#AD5577] text-xs font-semibold transition-all duration-200 border border-[#F8BBD0] min-h-[40px] touch-manipulation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Wrap It Again</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3D Animated Gift Box Graphic */}
          <motion.div
            onClick={handleOpenGift}
            whileTap={!isOpened ? { scale: 0.94 } : {}}
            className={`relative cursor-pointer transition-all duration-500 touch-manipulation ${
              isOpened ? 'scale-90 opacity-80' : 'animate-soft-float'
            }`}
          >
            {/* Box Lid with Ribbon */}
            <motion.div
              animate={
                isOpened
                  ? { y: -55, rotate: -16, opacity: 0.85 }
                  : { y: 0, rotate: 0 }
              }
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative z-20 w-36 sm:w-50 h-12 sm:h-14 rounded-t-2xl bg-gradient-to-r from-[#F8BBD0] via-[#AD5577] to-[#F8BBD0] shadow-md flex items-center justify-center border-t-2 border-white/80"
            >
              {/* Ribbon Bow on Lid */}
              <div className="absolute -top-5 sm:-top-6 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl filter drop-shadow-md">🎀</span>
              </div>
              {/* Vertical Ribbon */}
              <div className="w-6 sm:w-8 h-full bg-[#FFF8F3]/90 shadow-xs" />
            </motion.div>

            {/* Box Body */}
            <div className="relative z-10 w-32 sm:w-46 h-30 sm:h-38 mx-auto rounded-b-2xl bg-gradient-to-b from-[#AD5577] via-[#863654] to-[#6e2b43] shadow-xl flex items-center justify-center overflow-hidden border-b-2 border-x-2 border-white/30">
              {/* Center Vertical Ribbon */}
              <div className="w-6 sm:w-8 h-full bg-[#FFF8F3]/90 shadow-xs" />
              {/* Center Horizontal Ribbon */}
              <div className="absolute inset-x-0 h-6 sm:h-8 bg-[#FFF8F3]/90 shadow-xs" />

              {/* Heart Badge on Box */}
              <div className="relative z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-[#F8BBD0]">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-[#AD5577] text-[#AD5577]" />
              </div>
            </div>

            {/* Shadow under the box */}
            <div className="w-40 sm:w-54 h-5 sm:h-6 bg-black/15 rounded-full blur-md mx-auto -mt-2" />
          </motion.div>
        </div>

        {/* Nudge helper if unopened */}
        {!isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-poppins text-[#AD5577] font-medium px-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tap the gift box to reveal your birthday surprise!</span>
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
