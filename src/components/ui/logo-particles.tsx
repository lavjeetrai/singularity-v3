'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export function LogoParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    const particles: any[] = []
    const particleCount = 800

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Generate particles randomly
    for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = Math.random() * Math.max(canvas.width, canvas.height)

    const p: any = {
        angle,
        radius,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius
    }

    particles.push(p)

    gsap.to(p, {
        radius: Math.random() * 40,
        duration: 3,
        delay: 0.3,
        ease: "expo.out"
    })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach(p => {
        p.angle += 0.002

        p.x = centerX + Math.cos(p.angle) * p.radius
        p.y = centerY + Math.sin(p.angle) * p.radius

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = "white"
        ctx.shadowBlur = 12
        ctx.shadowColor = "white"
        ctx.fill()
        })

      requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0"
    />
  )
}