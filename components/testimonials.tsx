'use client'

import { Card } from '@/components/ui/card'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Liam Cortez',
    role: 'Tech Enthusiast',
    image: '/professional-man-portrait.png',
    text: 'TechoraHome transformed my apartment into a futuristic smart space. The integration is seamless!',
  },
  {
    name: 'Naomi Yuki',
    role: 'Interior Designer',
    image: '/professional-woman-portrait.png',
    text: 'Finally, smart home products that match my aesthetic vision. Beautiful and functional.',
  },
  {
    name: 'Santiago Brooks',
    role: 'Software Engineer',
    image: '/professional-man-portrait-tech.png',
    text: 'The reviews here are detailed and honest. Helped me make the perfect choices for my setup.',
  },
  {
    name: 'Ella Kai',
    role: 'Content Creator',
    image: '/creative-professional-woman.png',
    text: 'Love the cyber-aesthetic and the quality recommendations. My smart studio is incredible now!',
  },
  {
    name: 'Darius Vann',
    role: 'Home Automation Expert',
    image: '/professional-man-portrait-tech-expert.jpg',
    text: 'Comprehensive reviews and cutting-edge product selection. This is the future of home tech.',
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,249,0.05),transparent_70%)]" />

      <div className="container mx-auto relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-secondary text-balance">
          Voices in Sync
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg text-balance">
          Hear from the community building the smart homes of tomorrow
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-card border-secondary/20 p-6 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index ? 'neon-border border-secondary neon-glow scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/40">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
