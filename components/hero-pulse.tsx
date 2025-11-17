'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroPulse() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    let frame = 0
    const animate = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw pulsing circles
      for (let i = 0; i < 5; i++) {
        const radius = 50 + i * 40 + Math.sin(frame * 0.02 + i) * 10
        const alpha = 0.3 - i * 0.05
        
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 255, 249, ${alpha})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Draw connecting lines from mouse
      if (mousePos.x !== 0 && mousePos.y !== 0) {
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(mousePos.x, mousePos.y)
        ctx.strokeStyle = 'rgba(75, 199, 247, 0.3)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('resize', updateSize)
  }, [mousePos])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,249,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Animated Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary neon-text animate-fade-in text-balance">
            Your Home. Amplified.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide animate-fade-in text-balance" style={{ animationDelay: '0.2s' }}>
            Where Smart Meets Sound.
          </p>

          {/* CTA Button */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/reviews">
              <Button 
                size="lg" 
                className="neon-border bg-primary text-primary-foreground hover:neon-glow transition-all text-lg px-8 py-6 font-display"
              >
                Enter Experience
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 wave-animation">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex items-end justify-center pb-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
