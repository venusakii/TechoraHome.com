'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const products = [
  {
    id: 'atomic-habits',
    name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    category: 'Books',
    price: '$12.99',
    image: 'https://m.media-amazon.com/images/I/61XxVmn3HKL._AC_SX679_.jpg',
    rating: 4.8,
  },
  {
    id: 'philips-hue-starter',
    name: 'Philips Hue Starter Kit: Bridge Pro + 3 A19 E26 Smart Bulbs + Button, White & Color Ambiance',
    category: 'Lighting',
    price: '$219.99',
    image: 'https://m.media-amazon.com/images/I/71xDTHjgoWL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg',
    rating: 4.6,
  },
  {
    id: 'ring-doorbell',
    name: 'Ring Battery Doorbell Plus',
    category: 'Security',
    price: '$79.99',
    image: 'https://m.media-amazon.com/images/I/51PtzlFkR9L._SX679_.jpg',
    rating: 4.5,
  },
  {
    id: 'nest-thermostat',
    name: 'Google Nest Learning Thermostat 4th Gen',
    category: 'Energy',
    price: '$165.99',
    image: 'https://m.media-amazon.com/images/I/51wLt4jvhZL._AC_SX679_.jpg',
    rating: 4.6,
  },
  {
    id: 'sonos-amp',
    name: 'Sonos Amp - Powers speakers for home theater and multiroom audio',
    category: 'Audio',
    price: '$699.00',
    image: 'https://m.media-amazon.com/images/I/51wLlcqZ8aL._AC_SX679_.jpg',
    rating: 4.7,
  },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-accent text-balance">
          Top Smart Devices
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg text-balance">
          Handpicked premium devices that transform your living space
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-primary/20 neon-border overflow-hidden hover:neon-glow transition-all">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Image */}
                      <div className="flex items-center justify-center">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-auto max-w-sm rounded-lg"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex flex-col justify-center space-y-6">
                        <div>
                          <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
                          <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                  key={i}
                                  className={i < Math.floor(product.rating) ? 'text-primary' : 'text-muted'}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-foreground/70">{product.rating}</span>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Link href={`/reviews/${product.id}`} className="flex-1">
                            <Button className="w-full neon-border bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                              View Details
                            </Button>
                          </Link>
                          
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="neon-border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft size={24} />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8 neon-glow'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="neon-border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
