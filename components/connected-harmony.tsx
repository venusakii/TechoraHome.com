'use client'

import { Lightbulb, Speaker, Lock, Thermometer } from 'lucide-react'
import { useState } from 'react'

const devices = [
  { icon: Lightbulb, label: 'Smart Lighting', color: 'text-primary' },
  { icon: Speaker, label: 'Audio Systems', color: 'text-accent' },
  { icon: Lock, label: 'Security', color: 'text-secondary' },
  { icon: Thermometer, label: 'Climate Control', color: 'text-primary' },
]

export function ConnectedHarmony() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full max-w-4xl opacity-20" viewBox="0 0 800 400">
          {devices.map((_, i) => (
            <line
              key={i}
              x1="400"
              y1="200"
              x2={(i + 1) * 160}
              y2="200"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFF9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C86BFA" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-primary text-balance">
          Connected Harmony
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg text-balance">
          Every device in perfect sync, creating a seamless symphony of smart technology
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {devices.map((device, index) => {
            const Icon = device.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 ${
                    hoveredIndex === index ? 'neon-glow border-primary scale-110' : 'border-primary/40'
                  } flex items-center justify-center ${device.color} transition-all duration-300 bg-card`}
                >
                  <Icon size={36} className={hoveredIndex === index ? 'animate-pulse' : ''} />
                </div>
                <p className="text-center font-medium text-foreground/80 group-hover:text-primary transition-colors">
                  {device.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
