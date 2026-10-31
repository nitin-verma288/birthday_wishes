import confetti from 'canvas-confetti'

export const triggerHeartConfetti = () => {
  // Heart shaped confetti burst
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#F8BBD0', '#AD5577', '#FCE4EC', '#FF69B4', '#FFF8F3'],
    shapes: ['circle'],
    ticks: 200,
  })
}

export const triggerCelebration = () => {
  const duration = 2.5 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 45 * (timeLeft / duration)
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#AD5577', '#F8BBD0', '#FFD1DC', '#FFC0CB', '#FCE4EC', '#F5B041']
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#AD5577', '#F8BBD0', '#FFD1DC', '#FFC0CB', '#FCE4EC', '#F5B041']
    })
  }, 250)
}

export const triggerWishBlowout = () => {
  // Grand firework-like celebration when candles are blown
  const count = 200
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999
  }

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors: ['#AD5577', '#F8BBD0', '#FCE4EC', '#FFF8F3', '#FFD700', '#FF80AB']
    })
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  })
  fire(0.2, {
    spread: 60,
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}
