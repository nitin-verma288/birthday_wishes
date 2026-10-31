// Synthesized Romantic Music Box & Audio Controller
class RomanticAudioPlayer {
  constructor() {
    this.ctx = null
    this.isPlaying = false
    this.intervalId = null
    this.externalAudio = null
    this.volume = 0.4
    this.hasExternalAudio = false

    // Check if an external audio file exists
    this.initExternalAudio()
  }

  initExternalAudio() {
    try {
      this.externalAudio = new Audio('/music.mp3')
      this.externalAudio.loop = true
      this.externalAudio.volume = this.volume

      this.externalAudio.addEventListener('canplaythrough', () => {
        this.hasExternalAudio = true
      })
      this.externalAudio.addEventListener('error', () => {
        // Fall back to synth without throwing
        this.hasExternalAudio = false
      })
    } catch {
      this.hasExternalAudio = false
    }
  }

  initAudioContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      this.ctx = new AudioContext()
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  playNote(frequency, time, duration = 1.2, gainValue = 0.15) {
    if (!this.ctx) return

    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()

    // Pure crystal sine wave with a harmonic overtone for music-box sparkle
    osc.type = 'sine'
    osc.frequency.setValueAtTime(frequency, time)

    gain.gain.setValueAtTime(0, time)
    gain.gain.linearRampToValueAtTime(gainValue * this.volume, time + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration)

    osc.connect(gain)
    gain.connect(this.ctx.destination)

    osc.start(time)
    osc.stop(time + duration)
  }

  playMelodyLoop() {
    if (!this.ctx) return

    // Romantic music-box pentatonic frequencies (Hz)
    // C5, D5, E5, G5, A5, C6, D6, E6
    const notes = {
      C4: 261.63, E4: 329.63, G4: 392.00,
      C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46,
      G5: 783.99, A5: 880.00, B5: 987.77, C6: 1046.50,
      D6: 1174.66, E6: 1318.51
    }

    // Melodic pattern: gentle romantic lullaby / music box
    const melody = [
      { note: notes.C5, dur: 0.6, delay: 0 },
      { note: notes.E5, dur: 0.6, delay: 0.4 },
      { note: notes.G5, dur: 0.8, delay: 0.8 },
      { note: notes.C6, dur: 1.2, delay: 1.2 },
      { note: notes.B5, dur: 0.6, delay: 1.8 },
      { note: notes.A5, dur: 0.8, delay: 2.2 },
      { note: notes.G5, dur: 1.4, delay: 2.8 },

      { note: notes.A5, dur: 0.6, delay: 3.6 },
      { note: notes.G5, dur: 0.6, delay: 4.0 },
      { note: notes.E5, dur: 0.8, delay: 4.4 },
      { note: notes.D5, dur: 1.2, delay: 5.0 },
      { note: notes.C5, dur: 1.6, delay: 5.8 },

      // Sub chords (arpeggios)
      { note: notes.C4, dur: 2.0, delay: 0.0, vol: 0.08 },
      { note: notes.G4, dur: 2.0, delay: 1.8, vol: 0.08 },
      { note: notes.E4, dur: 2.0, delay: 3.6, vol: 0.08 },
      { note: notes.C4, dur: 2.0, delay: 5.4, vol: 0.08 },
    ]

    const loopLength = 7.0 // seconds

    const schedule = () => {
      const now = this.ctx.currentTime
      melody.forEach(item => {
        this.playNote(item.note, now + item.delay, item.dur, item.vol || 0.16)
      })
    }

    schedule()
    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        schedule()
      }
    }, loopLength * 1000)
  }

  play() {
    if (this.isPlaying) return
    this.isPlaying = true

    if (this.hasExternalAudio && this.externalAudio) {
      this.externalAudio.play().catch(() => {
        // Fall back to synth if external audio fails or is blocked
        this.initAudioContext()
        this.playMelodyLoop()
      })
    } else {
      this.initAudioContext()
      this.playMelodyLoop()
    }
  }

  pause() {
    this.isPlaying = false
    if (this.externalAudio) {
      this.externalAudio.pause()
    }
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
    if (this.ctx && this.ctx.state === 'running') {
      this.ctx.suspend()
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause()
      return false
    } else {
      this.play()
      return true
    }
  }
}

export const soundManager = new RomanticAudioPlayer()
