import { onMounted, onUnmounted } from 'vue'

interface Ripple {
  el: HTMLSpanElement
  createdAt: number
}

const DURATION = 400 // 波纹持续时间 ms

export function useClickEffect() {
  let ripples: Ripple[] = []
  let rafId = 0

  function createRipple(x: number, y: number) {
    const el = document.createElement('span')
    const size = 30

    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border: 2px solid rgba(108, 92, 231, 0.5);
      background: rgba(108, 92, 231, 0.08);
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%) scale(0.3);
      opacity: 1;
    `
    document.body.appendChild(el)

    // 触发重排后立即设置动画目标
    requestAnimationFrame(() => {
      el.style.transition = `all ${DURATION}ms cubic-bezier(0, 0.5, 0.5, 1)`
      el.style.transform = `translate(-50%, -50%) scale(3)`
      el.style.opacity = '0'
    })

    const ripple: Ripple = { el, createdAt: Date.now() }
    ripples.push(ripple)

    // 动画结束后移除
    setTimeout(() => {
      el.remove()
      ripples = ripples.filter(r => r !== ripple)
    }, DURATION + 50)
  }

  function onClick(e: MouseEvent) {
    createRipple(e.clientX, e.clientY)
  }

  onMounted(() => {
    document.addEventListener('click', onClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', onClick)
    if (rafId) cancelAnimationFrame(rafId)
    ripples.forEach(r => r.el.remove())
    ripples = []
  })
}