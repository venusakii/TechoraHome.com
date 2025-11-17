'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    // Handle form submission
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-accent neon-text text-balance">
              Send Your Signal
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed text-balance">
              Questions, feedback, or collaboration ideas? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-card border-primary/30 p-8">
              <h2 className="font-display text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground/80">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="neon-border border-primary/30 focus:border-primary focus:neon-glow bg-background/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="neon-border border-primary/30 focus:border-primary focus:neon-glow bg-background/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground/80">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="neon-border border-primary/30 focus:border-primary focus:neon-glow bg-background/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/80">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="neon-border border-primary/30 focus:border-primary focus:neon-glow bg-background/50 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full neon-border bg-primary text-primary-foreground hover:neon-glow transition-all text-lg py-6 font-display"
                >
                  Transmit
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card border-accent/30 p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent">Connect Directly</h3>
                <div className="space-y-3 text-foreground/80">
                  <p className="flex items-center gap-3">
                    <span className="text-accent">📧</span>
                    <span>contact@techorahome.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-accent">💬</span>
                    <span>Response within 24 hours</span>
                  </p>
                </div>
              </Card>

              <Card className="bg-card border-secondary/30 p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-secondary">Follow the Signal</h3>
                <div className="space-y-3 text-foreground/80">
                  <p className="flex items-center gap-3">
                    <span className="text-secondary">🐦</span>
                    <span>@TechoraHome</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-secondary">📸</span>
                    <span>@TechoraHome</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-secondary">📺</span>
                    <span>TechoraHome Channel</span>
                  </p>
                </div>
              </Card>

              <Card className="bg-card border-primary/30 p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-primary">Business Inquiries</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Interested in partnerships, sponsorships, or product reviews?
                </p>
                <p className="text-foreground/80">
                  Email: <span className="text-primary">business@techorahome.com</span>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  )
}
