import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function FloatingParticles() {
  const [particles, setParticles] = useState([])
  const [cursorTrails, setCursorTrails] = useState([])

  useEffect(() => {
    const isMobile = window.innerWidth < 640
    const count = isMobile ? 12 : 24
    const items = []
    const symbols = ['🌸', '✨', '💖', '🌷', '🤍', '🎀', '⭐', '🌺', '💕']

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        symbol: symbols[i % symbols.length],
        left: Math.random() * 94 + 3,
        size: isMobile ? Math.random() * 12 + 12 : Math.random() * 16 + 14,
        duration: Math.random() * 12 + 12,
        delay: Math.random() * 8,
        sway: isMobile ? Math.random() * 30 - 15 : Math.random() * 50 - 25,
        opacity: Math.random() * 0.45 + 0.35,
      })
    }
    setParticles(items)

    // Touch and cursor sparkle trail
    let lastTime = 0
    const handleMove = (e) => {
      const now = Date.now()
      if (now - lastTime < 110) return
      lastTime = now

      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX)
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY)
      if (!clientX || !clientY) return

      const sparkle = {
        id: Math.random(),
        x: clientX,
        y: clientY,
        symbol: ['✨', '💖', '🌸', '⭐'][Math.floor(Math.random() * 4)],
        size: isMobile ? 12 : 16,
      }

      setCursorTrails((prev) => [...prev.slice(-6), sparkle])
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    window.addEventListener('touchmove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('touchmove', handleMove)
    }
  }, [])

  // Auto clean old cursor trails
  useEffect(() => {
    if (cursorTrails.length === 0) return
    const timer = setTimeout(() => {
      setCursorTrails((prev) => prev.slice(1))
    }, 600)
    return () => clearTimeout(timer)
  }, [cursorTrails])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {/* Background ambient floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none will-change-transform"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          initial={{ y: '105vh', x: 0 }}
          animate={{
            y: '-10vh',
            x: [0, p.sway, -p.sway, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.symbol}
        </motion.div>
      ))}

      {/* Interactive cursor/touch trail sparkles */}
      {cursorTrails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none select-none z-50 text-rose-400"
          style={{
            left: trail.x - 8,
            top: trail.y - 8,
            fontSize: `${trail.size}px`,
          }}
          initial={{ scale: 0.3, opacity: 0.9, y: 0 }}
          animate={{ scale: 1.1, opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {trail.symbol}
        </motion.div>
      ))}
    </div>
  )
}
