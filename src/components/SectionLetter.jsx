import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Heart, Sparkles, X } from 'lucide-react'
import { triggerHeartConfetti } from '../utils/confetti'

export default function SectionLetter() {
  const [isOpen, setIsOpen] = useState(false)
  const letterRef = useRef(null)

  const handleToggle = () => {
    if (!isOpen) {
      triggerHeartConfetti()
      setTimeout(() => {
        if (letterRef.current) {
          letterRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 250)
    }
    setIsOpen(!isOpen)
  }

  return (
    <section id="letter-section" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-14 sm:py-20 pb-28 sm:pb-32 overflow-hidden bg-gradient-to-b from-[#FFF8F3] via-[#FCE4EC]/40 to-[#FFF8F3]">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#F8BBD0]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto w-full relative z-20 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-5 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F8BBD0] text-[#AD5577] text-xs sm:text-sm font-medium shadow-xs mb-2.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#AD5577]" />
            <span>Sent With Love</span>
            <Heart className="w-3.5 h-3.5 text-[#AD5577] fill-[#AD5577]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dancing text-4xl sm:text-6xl md:text-7xl text-[#AD5577] font-bold tracking-tight mb-2 px-2"
          >
            A Special Letter for Nidhi 💌
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif-title italic text-sm sm:text-lg text-[#6e4353] font-light px-4"
          >
            “Some words straight from the heart, just for your special day...”
          </motion.p>
        </div>

        {/* Envelope & Letter Container */}
        <div ref={letterRef} className="w-full max-w-[340px] sm:max-w-xl flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Sealed Envelope State */
              <motion.div
                key="sealed"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -15 }}
                transition={{ duration: 0.45 }}
                className="relative w-full cursor-pointer group touch-manipulation"
                onClick={handleToggle}
              >
                {/* Glow behind envelope */}
                <div className="absolute inset-0 bg-[#F8BBD0] rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Envelope Shell */}
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className="relative bg-gradient-to-br from-[#FFFDF9] via-[#FCE4EC] to-[#F8BBD0] rounded-3xl p-6 sm:p-9 shadow-xl border-2 border-white flex flex-col justify-between min-h-[250px] sm:min-h-[280px]"
                >
                  {/* Stamp in Top Right */}
                  <div className="absolute top-4 right-5 flex flex-col items-center">
                    <div className="w-12 h-14 sm:w-13 sm:h-15 rounded-md border-2 border-dashed border-[#AD5577]/60 bg-white/80 flex flex-col items-center justify-center p-1 shadow-xs">
                      <span className="text-xs">🌸</span>
                      <span className="font-serif-title text-[8px] sm:text-[9px] text-[#AD5577] font-bold mt-0.5">FOR NIDHI</span>
                    </div>
                  </div>

                  {/* To: Label */}
                  <div className="text-left pr-14">
                    <span className="text-[10px] uppercase tracking-widest text-[#863654]/70 font-semibold">Special Delivery</span>
                    <h3 className="font-dancing text-2xl sm:text-4xl text-[#AD5577] font-bold mt-0.5">
                      To My Dearest Nidhi
                    </h3>
                  </div>

                  {/* Center Wax Seal Button */}
                  <div className="flex flex-col items-center justify-center my-4">
                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ repeat: Infinity, duration: 2.2 }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#AD5577] to-[#863654] shadow-lg flex items-center justify-center text-white border-2 border-white/70 glow-rose-btn"
                    >
                      <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
                    </motion.div>
                    <span className="mt-2.5 text-xs font-semibold text-[#863654] tracking-wide bg-white/85 px-3 py-0.5 rounded-full shadow-xs">
                      Tap Wax Seal to Open 💌
                    </span>
                  </div>

                  {/* Bottom Sender tag */}
                  <div className="text-right border-t border-[#AD5577]/20 pt-2.5">
                    <span className="text-xs font-poppins text-[#6e4353] italic">
                      With love from Pravesh Singh ❤️
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              /* Opened Letter State - Scrollable and clear on mobile */
              <motion.div
                key="opened"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative w-full letter-paper rounded-3xl p-5 sm:p-8 shadow-xl border-2 sm:border-4 border-white/95 max-h-[75dvh] overflow-y-auto"
              >
                {/* Close / Fold Back button */}
                <button
                  onClick={handleToggle}
                  aria-label="Close letter"
                  className="sticky top-0 float-right z-30 p-2 rounded-full bg-white/90 hover:bg-white text-[#AD5577] shadow-xs border border-[#F8BBD0] transition-transform active:scale-90 min-w-[36px] min-h-[36px] flex items-center justify-center -mr-2 -mt-2 sm:mr-0 sm:mt-0"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Decorative Floral Top Header */}
                <div className="text-center pb-2.5 border-b border-[#F8BBD0]/50 mb-3.5 flex items-center justify-center gap-1.5 pr-8">
                  <span className="text-base sm:text-lg">🌸</span>
                  <span className="font-serif-title tracking-wider text-[11px] sm:text-xs uppercase text-[#AD5577] font-semibold">
                    A Birthday Note from Pravesh
                  </span>
                  <span className="text-base sm:text-lg">🌸</span>
                </div>

                {/* Letter Body - Fully readable without zoom on mobile */}
                <div className="space-y-3 text-[#3d2b33]">
                  {/* Salutation */}
                  <p className="font-dancing text-2xl sm:text-3xl text-[#AD5577] font-bold">
                    Dear Nidhi,
                  </p>

                  <p className="font-dancing text-lg sm:text-2xl leading-relaxed text-[#4a2e3b]">
                    On your special day, I just want to remind you how special you are.
                  </p>

                  <p className="font-dancing text-lg sm:text-2xl leading-relaxed text-[#4a2e3b]">
                    May your life always be filled with happiness, beautiful memories, genuine smiles, and endless reasons to celebrate.
                  </p>

                  <p className="font-dancing text-lg sm:text-2xl leading-relaxed text-[#4a2e3b]">
                    I hope this new year of your life brings you everything your heart wishes for.
                  </p>

                  <p className="font-dancing text-lg sm:text-2xl leading-relaxed text-[#4a2e3b]">
                    Keep smiling, keep shining, and never stop being the wonderful person you are.
                  </p>

                  <p className="font-dancing text-lg sm:text-2xl leading-relaxed text-[#AD5577] font-semibold pt-1">
                    Wishing you the happiest birthday!
                  </p>

                  {/* Sign-off */}
                  <div className="pt-3 text-right">
                    <p className="font-dancing text-lg sm:text-2xl text-[#553644]">
                      With lots of warm wishes,
                    </p>
                    <p className="font-script text-2xl sm:text-3xl text-[#AD5577] font-bold mt-0.5">
                      Pravesh Singh ❤️
                    </p>
                  </div>
                </div>

                {/* Bottom re-seal button */}
                <div className="mt-4 pt-3 border-t border-[#F8BBD0]/40 flex justify-center">
                  <button
                    onClick={handleToggle}
                    className="text-xs font-poppins text-[#AD5577] hover:underline flex items-center gap-1.5 py-1"
                  >
                    <span>Fold letter back into envelope</span>
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
