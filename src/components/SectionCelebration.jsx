import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Cake, Stars } from 'lucide-react'
import { triggerHeartConfetti } from '../utils/confetti'

export default function SectionCelebration() {
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerHeartConfetti()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const balloons = [
    { color: '#F8BBD0', left: '6%', delay: 0.1, duration: 6 },
    { color: '#AD5577', left: '18%', delay: 1.2, duration: 7 },
    { color: '#FCE4EC', left: '80%', delay: 0.5, duration: 6.5 },
    { color: '#FFD1DC', left: '90%', delay: 1.8, duration: 7.2 },
  ]

  return (
    <section id="celebration-section" className="relative min-h-[90dvh] w-full flex flex-col items-center justify-center px-4 py-14 sm:py-20 overflow-x-clip bg-gradient-to-b from-[#F8BBD0]/30 via-[#FFF8F3] to-[#FFF8F3]">
      {/* Floating balloons in the background */}
      {balloons.map((b, idx) => (
        <motion.div
          key={idx}
          className="absolute pointer-events-none"
          style={{ left: b.left, bottom: '-70px' }}
          animate={{
            y: ['0dvh', '-125dvh'],
            x: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: b.duration,
            delay: b.delay,
            ease: 'easeInOut',
          }}
        >
          <div className="flex flex-col items-center">
            {/* Balloon Body */}
            <div
              className="w-10 h-14 sm:w-16 sm:h-20 rounded-full shadow-md relative flex items-center justify-center"
              style={{
                backgroundColor: b.color,
                boxShadow: `0 6px 16px ${b.color}77`,
                borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%'
              }}
            >
              <div className="absolute top-2 left-2 w-2 h-3 sm:w-3 sm:h-5 bg-white/40 rounded-full blur-[1px] rotate-[-25deg]" />
              <Heart className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white/50" />
            </div>
            {/* Knot & ribbon */}
            <div className="w-1.5 h-1 bg-[#863654]/40" />
            <div className="w-0.5 h-12 sm:h-16 bg-[#863654]/25" />
          </div>
        </motion.div>
      ))}

      {/* Decorative Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#AD5577] text-xs sm:text-sm font-medium shadow-xs mb-4 sm:mb-6"
      >
        <Cake className="w-3.5 h-3.5 text-[#AD5577]" />
        <span>Celebrate The Most Special Day</span>
        <Sparkles className="w-3.5 h-3.5 text-[#AD5577]" />
      </motion.div>

      {/* Main Birthday Typography */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-dancing text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center text-[#AD5577] font-bold tracking-tight mb-3 px-2"
      >
        Happy Birthday Nidhi! 🎂
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-serif-title italic text-base sm:text-xl md:text-2xl text-center text-[#553644] max-w-xl mx-auto px-4 leading-relaxed font-light mb-8 sm:mb-12"
      >
        “Today is all about you, your smile, and all the beautiful moments waiting for you.”
      </motion.p>

      {/* Centerpiece: Animated Birthday Cake Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative my-2 sm:my-4 flex flex-col items-center max-w-full"
      >
        {/* Soft glowing aura under cake */}
        <div className="absolute -bottom-4 w-44 sm:w-64 h-10 sm:h-14 bg-[#F8BBD0]/60 rounded-full blur-xl pointer-events-none" />

        {/* Cake Container */}
        <div className="relative flex flex-col items-center">
          {/* Candle on top */}
          <div className="relative flex flex-col items-center -mb-1 z-20">
            <div className="candle-flame w-3.5 h-5 sm:w-4 sm:h-6 rounded-full bg-gradient-to-t from-[#FF5722] via-[#FFB74D] to-[#FFF9C4] shadow-md mb-0.5" />
            <div className="w-0.5 h-2 bg-neutral-700" />
            <div className="w-3 sm:w-3.5 h-8 sm:h-10 rounded-t bg-gradient-to-r from-[#FFF8F3] via-[#F8BBD0] to-[#FFF8F3] shadow-xs flex flex-col justify-around py-1">
              <div className="w-full h-0.5 bg-[#AD5577]/30" />
              <div className="w-full h-0.5 bg-[#AD5577]/30" />
            </div>
          </div>

          {/* Tier 1 (Top tier) */}
          <div className="w-32 sm:w-44 h-14 sm:h-16 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FCE4EC] to-[#F8BBD0] border-2 border-white/80 shadow-md relative overflow-hidden flex items-center justify-center z-10">
            {/* Frosting drips */}
            <div className="absolute top-0 inset-x-0 flex justify-around">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-4 sm:w-5 h-3.5 sm:h-4 bg-white rounded-b-full shadow-inner" />
              ))}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
              <span className="text-xs sm:text-sm">🍓</span>
              <span className="text-xs sm:text-sm">🌸</span>
              <span className="text-xs sm:text-sm">🍓</span>
            </div>
          </div>

          {/* Tier 2 (Bottom tier) */}
          <div className="w-46 sm:w-64 h-18 sm:h-22 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FFF8F3] via-[#F8BBD0] to-[#AD5577]/40 border-2 border-white/80 shadow-lg relative overflow-hidden -mt-1.5 flex items-center justify-center">
            {/* Frosting border */}
            <div className="absolute top-0 inset-x-0 flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-b-full shadow-inner" />
              ))}
            </div>
            {/* Decorative banner across cake */}
            <div className="mt-3 sm:mt-4 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-white/85 border border-[#F8BBD0] shadow-xs flex items-center gap-1.5">
              <Heart className="w-3 h-3 fill-[#AD5577] text-[#AD5577]" />
              <span className="font-dancing text-sm sm:text-base md:text-lg font-bold text-[#AD5577]">Sweet Nidhi</span>
              <Heart className="w-3 h-3 fill-[#AD5577] text-[#AD5577]" />
            </div>
          </div>

          {/* Cake Stand */}
          <div className="w-52 sm:w-72 h-3.5 sm:h-4 rounded-full bg-white shadow-md border border-[#F8BBD0] -mt-1" />
          <div className="w-16 sm:w-20 h-3 sm:h-4 bg-gradient-to-b from-white to-[#FCE4EC] shadow-xs" />
          <div className="w-28 sm:w-32 h-2.5 sm:h-3 rounded-full bg-white shadow-xs border border-[#F8BBD0]" />
        </div>
      </motion.div>

      {/* Wish text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 sm:mt-8 flex items-center gap-1.5 text-[#863654] font-poppins text-xs sm:text-sm font-medium text-center px-4"
      >
        <Stars className="w-3.5 h-3.5 text-[#F5B041] shrink-0" />
        <span>May every moment sparkle with endless joy & laughter</span>
        <Stars className="w-3.5 h-3.5 text-[#F5B041] shrink-0" />
      </motion.div>
    </section>
  )
}
