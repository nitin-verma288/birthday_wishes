import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Heart, Flame, Wind, RotateCcw } from 'lucide-react'
import { triggerWishBlowout } from '../utils/confetti'

export default function SectionWish() {
  const [candlesLit, setCandlesLit] = useState(true)
  const [wishMade, setWishMade] = useState(false)

  const handleMakeWish = () => {
    if (candlesLit) {
      setCandlesLit(false)
      setWishMade(true)
      triggerWishBlowout()
    }
  }

  const handleRelight = () => {
    setCandlesLit(true)
    setWishMade(false)
  }

  return (
    <section id="wish-section" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-16 pb-36 sm:pb-44 overflow-x-clip bg-gradient-to-b from-[#FFF8F3] via-[#FCE4EC]/60 to-[#F8BBD0]/40">
      {/* Warm magical glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${
        candlesLit ? 'bg-[#FFD180]/35' : 'bg-[#F8BBD0]/30'
      }`} />

      <div className="max-w-2xl mx-auto w-full relative z-20 flex flex-col items-center text-center">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F8BBD0] text-[#AD5577] text-xs sm:text-sm font-medium shadow-xs mb-2.5"
        >
          <Flame className="w-3.5 h-3.5 text-[#FFA726]" />
          <span>The Birthday Ritual</span>
          <Sparkles className="w-3.5 h-3.5 text-[#AD5577]" />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-dancing text-4xl sm:text-6xl md:text-7xl text-[#AD5577] font-bold tracking-tight mb-2 px-2"
        >
          Make a Wish 🎂
        </motion.h2>

        {/* Prompt Instruction */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif-title italic text-base sm:text-xl text-[#553644] font-light max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed px-4"
        >
          “Close your eyes, make a wish, and let the magic begin...”
        </motion.p>

        {/* Cake with Glowing Interactive Candles */}
        <div className="relative my-3 sm:my-4 flex flex-col items-center max-w-full">
          {/* Candles Container */}
          <div className="flex items-end justify-center gap-5 sm:gap-8 -mb-2 z-20">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Candle Flame or Smoke */}
                <div className="h-8 sm:h-9 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {candlesLit ? (
                      <motion.div
                        key="flame"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="candle-flame w-3.5 sm:w-4 h-6 sm:h-7 rounded-full bg-gradient-to-t from-[#FF5722] via-[#FFB74D] to-[#FFF9C4] cursor-pointer touch-manipulation"
                        title="Tap to blow out"
                        onClick={handleMakeWish}
                      />
                    ) : (
                      <motion.div
                        key="smoke"
                        initial={{ opacity: 0.8, y: 0, scale: 0.8 }}
                        animate={{ opacity: 0, y: -20, scale: 1.5 }}
                        transition={{ duration: 1.4, ease: 'easeOut' }}
                        className="flex flex-col items-center text-neutral-400 select-none text-xs font-semibold"
                      >
                        <Wind className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[9px] text-neutral-400">wish ✨</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Wick */}
                <div className="w-0.5 h-2 sm:h-2.5 bg-neutral-800" />

                {/* Candle Body */}
                <div
                  className={`w-3 sm:w-4 rounded-t-md shadow-xs border border-black/5 ${
                    idx === 1
                      ? 'h-12 sm:h-16 bg-gradient-to-r from-[#FCE4EC] via-[#F8BBD0] to-[#FCE4EC]'
                      : 'h-10 sm:h-12 bg-gradient-to-r from-[#FFF8F3] via-[#F8BBD0] to-[#FFF8F3]'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Birthday Cake Illustration */}
          <div className="w-48 sm:w-72 h-18 sm:h-24 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FCE4EC] to-[#F8BBD0] border-2 border-white/90 shadow-xl relative overflow-hidden flex flex-col items-center justify-center z-10">
            {/* Frosting scallops */}
            <div className="absolute top-0 inset-x-0 flex justify-around">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-4 sm:w-6 h-3 sm:h-4 bg-white rounded-b-full shadow-inner" />
              ))}
            </div>

            <div className="mt-2.5 sm:mt-3 flex items-center gap-1.5 px-2">
              <span className="text-xs">✨</span>
              <span className="font-dancing text-lg sm:text-2xl font-bold text-[#AD5577] text-center">
                Happy Birthday Nidhi
              </span>
              <span className="text-xs">✨</span>
            </div>
          </div>

          {/* Stand Base */}
          <div className="w-56 sm:w-80 h-3.5 sm:h-4 bg-white rounded-full shadow-md border border-[#F8BBD0] -mt-1" />
          <div className="w-20 sm:w-24 h-3 sm:h-4 bg-gradient-to-b from-white to-[#FCE4EC]" />
          <div className="w-30 sm:w-36 h-2.5 sm:h-3 bg-white rounded-full shadow-xs border border-[#F8BBD0]" />
        </div>

        {/* Action Button: I Made My Wish ✨ */}
        <div className="mt-6 w-full flex justify-center">
          <AnimatePresence mode="wait">
            {candlesLit ? (
              <motion.button
                key="make-wish-btn"
                id="make-wish-btn"
                onClick={handleMakeWish}
                whileTap={{ scale: 0.94 }}
                className="group relative w-full max-w-xs sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#AD5577] via-[#863654] to-[#AD5577] text-white font-medium text-base sm:text-xl shadow-xl glow-rose-btn flex items-center justify-center gap-2.5 transition-all duration-300 min-h-[48px] touch-manipulation"
              >
                <span className="font-poppins font-medium tracking-wide">I Made My Wish</span>
                <span className="text-lg sm:text-xl group-hover:rotate-12 transition-transform">✨</span>
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Revealed Final Birthday Message Card */}
        <AnimatePresence>
          {wishMade && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="mt-6 sm:mt-8 p-5 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#F8BBD0] shadow-2xl glow-soft-pink w-[92vw] max-w-lg"
            >
              {/* Confetti & heart icons */}
              <div className="flex items-center justify-center gap-1.5 mb-2.5 text-[#AD5577]">
                <Heart className="w-4 h-4 fill-[#AD5577]" />
                <Sparkles className="w-4 h-4" />
                <Heart className="w-4 h-4 fill-[#AD5577]" />
              </div>

              {/* Final heading */}
              <h3 className="font-dancing text-3xl sm:text-5xl font-bold text-[#AD5577] tracking-tight mb-2.5 px-1 leading-tight">
                Once Again, Happy Birthday Nidhi! ❤️
              </h3>

              {/* Subtext */}
              <p className="font-serif-title italic text-base sm:text-xl text-[#4a2e3b] font-light mb-4 px-2">
                “Stay happy, stay beautiful, and keep smiling always.”
              </p>

              {/* Signature */}
              <div className="pt-4 border-t border-[#F8BBD0]/50 flex flex-col items-center">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#863654]/80 font-semibold mb-0.5">
                  A personal birthday gift
                </span>
                <span className="font-script text-2xl sm:text-4xl text-[#AD5577] font-bold">
                  Made with love by Pravesh Singh.
                </span>
              </div>

              {/* Relight button */}
              <div className="mt-5 flex justify-center">
                <button
                  onClick={handleRelight}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFF0F5] hover:bg-[#FCE4EC] active:scale-95 text-[#AD5577] text-xs font-semibold transition-colors border border-[#F8BBD0] min-h-[38px] touch-manipulation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Light the candles again</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
