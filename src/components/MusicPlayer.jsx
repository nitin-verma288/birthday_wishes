import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react'
import { soundManager } from '../utils/audio'

export default function MusicPlayer({ isAutoStartTriggered }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  // Start music once user clicks "Open Your Surprise" if not already started
  useEffect(() => {
    if (isAutoStartTriggered && !isPlaying) {
      soundManager.play()
      setIsPlaying(true)
    }
  }, [isAutoStartTriggered])

  // Hide the initial nudge tooltip after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  const handleToggle = () => {
    const active = soundManager.toggle()
    setIsPlaying(active)
    setShowTooltip(false)
  }

  return (
    <div className="fixed top-[calc(0.75rem+env(safe-area-inset-top,0px))] right-3 sm:right-5 z-50 flex items-center gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#AD5577] bg-white/90 backdrop-blur-md shadow-md border border-[#F8BBD0]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#AD5577] animate-spin" style={{ animationDuration: '4s' }} />
            <span>{isPlaying ? 'Melody playing...' : 'Click for birthday melody'}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        id="music-toggle-btn"
        onClick={handleToggle}
        whileTap={{ scale: 0.92 }}
        className={`relative flex items-center justify-center p-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-lg border transition-all duration-300 backdrop-blur-md min-h-[44px] min-w-[44px] ${
          isPlaying
            ? 'bg-gradient-to-r from-[#AD5577] to-[#863654] text-white border-white/40 glow-rose-btn'
            : 'bg-white/90 text-[#AD5577] border-[#F8BBD0] hover:bg-[#FFF0F5]'
        }`}
        aria-label="Toggle background music"
      >
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="w-4 h-4 rounded-full border-2 border-dashed border-white flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </motion.div>
              <div className="flex items-end gap-0.5 h-3.5">
                <motion.div
                  className="w-1 bg-white rounded-full"
                  animate={{ height: ['4px', '14px', '6px', '12px'] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
                <motion.div
                  className="w-1 bg-white rounded-full"
                  animate={{ height: ['12px', '4px', '14px', '8px'] }}
                  transition={{ repeat: Infinity, duration: 0.7, delay: 0.15 }}
                />
                <motion.div
                  className="w-1 bg-white rounded-full"
                  animate={{ height: ['6px', '14px', '5px', '11px'] }}
                  transition={{ repeat: Infinity, duration: 0.9, delay: 0.3 }}
                />
              </div>
              <span className="hidden sm:inline text-xs font-semibold tracking-wide">Melody On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wide">Play Music</span>
            </>
          )}
        </div>
      </motion.button>
    </div>
  )
}
