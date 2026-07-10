import { onMounted, onUnmounted } from 'vue'

interface Particle {
  el: HTMLSpanElement
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
}

const COLORS = [
  '#6C5CE7', '#A29BFE', '#00B894', '#FDCB6E',
  '#FF7675', '#74B9FF', '#FD79A8', '#55EFC4',
]

export function useClickEffect() {
  let particles: Particle[] = []
  let rafId = 0
  let container: HTMLDivElement | null = null

  function createParticle(x: number, y: number) {
    const el = document.createElement('span')
    const size = Math.random() * 8 + 4
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 3 + 2
    const life = Math.random() * 600 + 400

    const particle: Particle = {
      el, x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      life, maxLife: life,
      size,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }

    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${particle.color};
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
    `
    document.body.appendChild(el)
    particles.push(particle)
  }

  function animate() {
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.life -= 16
      if (p.life <= 0) {
        p.el.remove()
        particles.splice(i, 1)
        continue
      }
      const progress = 1 - p.life / p.maxLife
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.05 // gravity
      p.el.style.left = `${p.x}px`
      p.el.style.top = `${p.y}px`
      p.el.style.opacity = `${1 - progress}`
      p.el.style.transform = `translate(-50%, -50%) scale(${1 - progress * 0.5})`
    }
    if (particles.length > 0) {
      rafId = requestAnimationFrame(animate)
    }
  }

  function onClick(e: MouseEvent) {
    const count = Math.floor(Math.random() * 4) + 6
    for (let i = 0; i < count; i++) {
      createParticle(e.clientX, e.clientY)
    }
    if (!rafId) {
      rafId = requestAnimationFrame(animate)
    }
  }

  onMounted(() => {
    document.addEventListener('click', onClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', onClick)
    if (rafId) cancelAnimationFrame(rafId)
    particles.forEach(p => p.el.remove())
    particles = []
  })
}