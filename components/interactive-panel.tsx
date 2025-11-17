'use client'

import { useState } from 'react'
import { useSoundEffects } from '@/components/sound-system'

export function InteractivePanel() {
  const [clickedPositions, setClickedPositions] = useState<Array<{ x: number; y: number; id: number }>>([])
  const { playClick } = useSoundEffects()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    playClick()
    setClickedPositions(prev => [...prev, { x, y, id }])

    // Remove after animation
    setTimeout(() => {
      setClickedPositions(prev => prev.filter(p => p.id !== id))
    }, 1000)
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-primary text-balance">
          DreamSynth Panel
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg text-balance">
          Click anywhere to create waves of light and sound
        </p>

        <div
          className="max-w-4xl mx-auto h-96 rounded-lg neon-border border-primary/30 bg-card/30 backdrop-blur-sm cursor-pointer relative overflow-hidden"
          onClick={handleClick}
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,249,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,249,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Click ripples */}
          {clickedPositions.map(pos => (
            <div
              key={pos.id}
              className="absolute w-0 h-0"
              style={{ left: pos.x, top: pos.y }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping" />
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse" />
            </div>
          ))}

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-2xl text-foreground/40 text-center px-8">
              Tap to Play
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
