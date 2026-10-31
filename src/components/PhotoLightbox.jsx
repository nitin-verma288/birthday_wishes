import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

export default function PhotoLightbox({ photos, currentIndex, isOpen, onClose, onSelectIndex }) {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  if (!isOpen || currentIndex === null) return null

  const photo = photos[currentIndex]

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % photos.length)
  }

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + photos.length) % photos.length)
  }

  // Touch swipe support for mobile
  const minSwipeDistance = 45

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Close Button - 44x44px touch target */}
        <button
          onClick={onClose}
          aria-label="Close photo view"
          className="absolute top-[calc(0.75rem+env(safe-area-inset-top,0px))] right-3 sm:right-6 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev / Next Navigation Controls - Large mobile touch friendly */}
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/25 hover:bg-white/40 text-white backdrop-blur-md transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/25 hover:bg-white/40 text-white backdrop-blur-md transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Box with swipe support */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative z-20 w-[94vw] max-w-2xl max-h-[88dvh] flex flex-col items-center bg-[#FFF8F3] rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl border-2 sm:border-4 border-white/95 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top subtle bar */}
          <div className="w-full flex items-center justify-between pb-2 px-1 border-b border-[#F8BBD0]/40 text-[#AD5577] text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#AD5577]" />
              <span>{currentIndex + 1} / {photos.length}</span>
            </div>
            <span className="font-dancing text-base sm:text-lg font-bold">Nidhi's Moments ❤️</span>
          </div>

          {/* Full Photo Image - Zero Cropping */}
          <div className="relative mt-2.5 flex items-center justify-center max-h-[52dvh] sm:max-h-[60dvh] w-full rounded-xl overflow-hidden bg-neutral-900/5 p-1">
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-h-[50dvh] sm:max-h-[58dvh] w-auto max-w-full object-contain rounded-lg shadow-sm"
            />
          </div>

          {/* Caption & Story Note */}
          <div className="mt-3 text-center max-w-lg px-2">
            <h4 className="font-serif-title font-semibold text-base sm:text-lg text-[#3d2b33] line-clamp-1">
              {photo.caption}
            </h4>
            <p className="font-poppins text-xs text-[#863654] mt-0.5 italic line-clamp-2">
              {photo.note}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-3 pb-1">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => onSelectIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? 'w-6 h-2 bg-[#AD5577]'
                    : 'w-2 h-2 bg-[#F8BBD0] hover:bg-[#AD5577]/60'
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
