'use client'

import { useEffect, useState } from 'react'

interface Particle {
  x: number
  y: number
  life: number
}

export function NeonCursor() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setParticles(prev => [
        ...prev.slice(-20), // Keep only last 20 particles
        { x: e.clientX, y: e.clientY, life: 1 }
      ])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(p => ({ ...p, life: p.life - 0.05 }))
          .filter(p => p.life > 0)
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.life * 0.5,
            boxShadow: `0 0 ${10 * particle.life}px rgba(0, 255, 249, ${particle.life})`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  )
}
