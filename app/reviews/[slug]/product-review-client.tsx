'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

interface ProductReviewClientProps {
  product: any
}

export default function ProductReviewClient({ product }: ProductReviewClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'reviews'>('features')

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Product Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted neon-border border-primary/30">
              <img
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary hover:neon-glow transition-all"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary hover:neon-glow transition-all"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-medium mb-2">{product.category}</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 neon-text text-primary text-balance">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${i < Math.floor(product.rating) ? 'text-primary' : 'text-muted'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-foreground/70 font-medium">
                  {product.rating} ({product.totalReviews} reviews)
                </span>
              </div>

              <p className="text-foreground/70 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Price */}
            

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button 
                asChild
                className="flex-1 neon-border bg-primary text-primary-foreground hover:neon-glow transition-all text-lg py-6"
              >
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer nofollow">
                  <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View on Amazon
                </a>
              </Button>
            </div>

            {/* Quick Info */}
            <Card className="bg-card/50 border-accent/30 p-6">
              <h3 className="font-display font-bold text-lg mb-4 text-accent">Why Choose This?</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Premium quality at competitive pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Highly rated by verified buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Easy integration with smart home ecosystems</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="space-y-8">
          {/* Tab Navigation */}
          <div className="flex gap-4 border-b border-primary/20 overflow-x-auto">
            <button
              onClick={() => setActiveTab('features')}
              className={`font-display font-bold px-6 py-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'features'
                  ? 'border-primary text-primary neon-text'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
            >
              ⚡ Features
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`font-display font-bold px-6 py-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'border-primary text-primary neon-text'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
            >
              💬 Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`font-display font-bold px-6 py-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-primary text-primary neon-text'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
            >
              ⭐ Reviews
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-4">
                {product.features.map((feature: string, index: number) => (
                  <Card
                    key={index}
                    className="bg-card border-primary/20 p-4 hover:neon-border hover:border-primary/50 transition-all"
                  >
                    <p className="text-foreground/80 leading-relaxed flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">•</span>
                      <span>{feature}</span>
                    </p>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'specs' && (
              <Card className="bg-card border-primary/20 p-8">
                <div className="space-y-4">
                  {product.specs.map((spec: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-primary/10 last:border-0"
                    >
                      <span className="font-display font-medium text-foreground/70">{spec.label}</span>
                      <span className="text-foreground font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {product.reviews.map((review: any, index: number) => (
                  <Card key={index} className="bg-card border-secondary/20 p-6 hover:neon-border hover:border-secondary/50 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-display font-bold text-foreground">{review.author}</p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={i < review.rating ? 'text-primary' : 'text-muted'}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{review.text}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
