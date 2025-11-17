'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-primary neon-glow text-primary flex items-center justify-center font-display font-bold text-lg">
              T
            </div>
          </div>
          <span className="font-display text-xl font-bold tracking-wider text-primary group-hover:neon-text transition-all">
            TechoraHome
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground/80 hover:text-primary hover:neon-text transition-all font-medium">
            Home
          </Link>
          <Link href="/reviews" className="text-foreground/80 hover:text-primary hover:neon-text transition-all font-medium">
            Reviews
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-primary hover:neon-text transition-all font-medium">
            About
          </Link>
          <Link href="/contact" className="text-foreground/80 hover:text-primary hover:neon-text transition-all font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-lg">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <Link 
              href="/" 
              className="text-foreground/80 hover:text-primary transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/reviews" 
              className="text-foreground/80 hover:text-primary transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              href="/about" 
              className="text-foreground/80 hover:text-primary transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-foreground/80 hover:text-primary transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="neon-border bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full">
              Explore Devices
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
