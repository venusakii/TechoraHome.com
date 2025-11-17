'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  category: string
  price: string
  image: string
  rating: number
  description: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`bg-card border-primary/20 overflow-hidden transition-all duration-300 ${
        isHovered ? 'neon-border neon-glow scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-display text-xl font-bold text-foreground mb-2 text-balance">
            {product.name}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed">{product.description}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < Math.floor(product.rating) ? 'text-primary' : 'text-muted'}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-foreground/70 font-medium">{product.rating}</span>
        </div>

        {/* Price */}
        

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Link href={`/reviews/${product.id}`} className="flex-1">
            <Button className="w-full neon-border bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              View Details
            </Button>
          </Link>
          
        </div>
      </div>
    </Card>
  )
}
