'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-fade-in">
      <div className="bg-card border-primary/30 neon-border rounded-lg p-6 shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-display font-bold text-lg text-primary">Cookie Notice</h3>
          <button onClick={declineCookies} className="text-foreground/60 hover:text-foreground">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
          This website uses cookies to improve your browsing experience and to analyze our traffic.
        </p>
        <div className="flex gap-3">
          <Button
            onClick={acceptCookies}
            className="flex-1 neon-border bg-primary text-primary-foreground hover:neon-glow"
          >
            Accept
          </Button>
          <Button
            onClick={declineCookies}
            variant="outline"
            className="flex-1 neon-border border-foreground/30"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}
