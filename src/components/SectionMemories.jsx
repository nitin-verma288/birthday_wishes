import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Maximize2, Camera, Eye } from 'lucide-react'
import PhotoLightbox from './PhotoLightbox'
import { triggerHeartConfetti } from '../utils/confetti'

export default function SectionMemories() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)
  const [likes, setLikes] = useState({ 0: 24, 1: 38, 2: 42, 3: 56 })

  // All 4 personal uploaded photographs of Nidhi
  const photos = [
    {
      id: 1,
      src: '/photos/nidhi-1.jpg',
      alt: 'Nidhi in striped top with cute pink bow and glasses',
      tag: 'Gentle Thoughts',
      caption: 'Sweet Innocence & Dreamy Eyes ✨',
      note: 'That thoughtful chin pose and her signature sweet innocence that brightens any room.',
      tapeColor: '#F8BBD0',
      rotation: '-1.5deg',
    },
    {
      id: 2,
      src: '/photos/nidhi-2.png',
      alt: 'Nidhi smiling warmly with pink flower filter and spectacles',
      tag: 'Pure Sunshine',
      caption: 'A Smile Brighter Than Sunshine 🌸',
      note: 'Her warm, effortless smile paired with a delicate pink bloom—truly heartwarming.',
      tapeColor: '#FCE4EC',
      rotation: '1.5deg',
    },
    {
      id: 3,
      src: '/photos/nidhi-3.jpg',
      alt: 'Nidhi in traditional blue attire with blue blossom in nature',
      tag: 'Serene Grace',
      caption: 'Grace In Shades Of Blue 💙',
      note: 'Surrounded by nature, wearing calm blue with timeless charm and elegance.',
      tapeColor: '#E1F5FE',
      rotation: '-1.2deg',
    },
    {
      id: 4,
      src: '/photos/nidhi-4.jpg',
      alt: 'Nidhi in gorgeous sky-blue festive dress with jhumkas and radiant smile',
      tag: 'Festive Radiance',
      caption: 'Traditional Radiance & Joy 🌟',
      note: 'Dressed in celebratory beauty with jhumkas and that captivating, unforgettable glow.',
      tapeColor: '#FFF3E0',
      rotation: '1.2deg',
    },
  ]

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index)
    setLightboxOpen(true)
  }

  const handleLike = (e, index) => {
    e.stopPropagation()
    setLikes((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }))
    triggerHeartConfetti()
  }

  return (
    <section id="memories-section" className="relative min-h-[100dvh] w-full px-4 sm:px-6 py-14 sm:py-20 overflow-x-clip bg-gradient-to-b from-[#FFF8F3] via-[#FFFDF9] to-[#FFF8F3]">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#FCE4EC]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#F8BBD0]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#F8BBD0] text-[#AD5577] text-xs sm:text-sm font-medium shadow-xs mb-3"
          >
            <Camera className="w-3.5 h-3.5 text-[#AD5577]" />
            <span>Cherished Memory Lane</span>
            <Sparkles className="w-3.5 h-3.5 text-[#AD5577]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dancing text-4xl sm:text-6xl md:text-7xl text-[#AD5577] font-bold tracking-tight mb-2 sm:mb-3 px-2"
          >
            Some Beautiful Moments ✨
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif-title italic text-base sm:text-xl text-[#6e4353] font-light max-w-lg mx-auto px-4"
          >
            “Every picture has its own little story...”
          </motion.p>
        </div>

        {/* Polaroid Gallery Grid - Responsive for mobile (1 col centered or 2 col on tablet/desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 items-start justify-center">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ rotate: photo.rotation }}
              whileHover={{ rotate: '0deg', scale: 1.02, zIndex: 30 }}
              className="polaroid relative rounded-2xl bg-white shadow-lg border border-neutral-100 flex flex-col cursor-pointer group w-full max-w-[320px] sm:max-w-none mx-auto touch-manipulation"
              onClick={() => openLightbox(index)}
            >
              {/* Cute Washi Tape at Top */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 rounded-xs opacity-85 shadow-xs border-dashed border border-black/10 z-20 pointer-events-none"
                style={{
                  backgroundColor: photo.tapeColor,
                  transform: 'translateX(-50%) rotate(-1deg)',
                }}
              />

              {/* Memory Tag Badge */}
              <div className="absolute top-3.5 right-3.5 z-20 px-2 py-0.5 rounded-full bg-white/95 text-[10px] font-semibold text-[#863654] shadow-xs border border-[#F8BBD0]/60">
                {photo.tag}
              </div>

              {/* Photo Container - Completely uncropped, preserves full face & aspect ratio */}
              <div className="relative w-full aspect-[3/4.2] rounded-xl overflow-hidden bg-gradient-to-b from-[#FFF8F3] to-[#FCE4EC]/40 border border-neutral-100 flex items-center justify-center p-1.5">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#AD5577]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center backdrop-blur-[2px]">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-[#AD5577] text-xs font-semibold shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Photo</span>
                  </div>
                </div>
              </div>

              {/* Polaroid Footer */}
              <div className="mt-3 px-1 flex flex-col">
                <h3 className="font-dancing text-lg sm:text-xl text-[#AD5577] font-bold line-clamp-1">
                  {photo.caption}
                </h3>
                <p className="font-poppins text-xs text-[#6e4353] mt-1 line-clamp-2 leading-relaxed font-light">
                  {photo.note}
                </p>

                {/* Bottom action row: like reaction & tap icon */}
                <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs text-[#863654]">
                  <button
                    onClick={(e) => handleLike(e, index)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF0F5] hover:bg-[#FCE4EC] active:scale-95 text-[#AD5577] transition-all min-h-[34px] touch-manipulation"
                    aria-label="Send love to photo"
                  >
                    <Heart className="w-3.5 h-3.5 fill-[#AD5577]" />
                    <span className="font-medium text-[11px]">{likes[index]}</span>
                  </button>

                  <div className="flex items-center gap-1 text-[11px] text-[#AD5577]/80 group-hover:text-[#AD5577] transition-colors py-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Tap to view</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery bottom note */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-xs sm:text-sm text-[#863654] font-poppins italic">
            Tap on any photo to experience the memory in full clarity ✨
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photos={photos}
        currentIndex={selectedPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />
    </section>
  )
}
