import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-primary neon-text text-balance">
              About Techora
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed text-balance">
              Illuminating the path to smarter living through technology
            </p>
          </div>

          {/* Neural Network Background Effect */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,249,0.1),transparent_70%)]" />
            <Card className="relative bg-card/50 border-primary/30 p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold mb-6 text-accent">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed mb-4 text-lg">
                At TechoraHome, we believe that smart home technology should be accessible, intuitive, and transformative. 
                We're not just reviewing products—we're curating the future of connected living.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Our team of tech enthusiasts and home automation experts rigorously tests each device, 
                ensuring that every recommendation we make meets our high standards for quality, functionality, and value.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-card border-primary/20 p-6 hover:neon-border hover:border-primary transition-all">
              <div className="text-primary text-4xl mb-4">🔍</div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Transparency</h3>
              <p className="text-foreground/70 leading-relaxed">
                Honest reviews with no hidden agendas. We disclose all affiliate relationships.
              </p>
            </Card>
            <Card className="bg-card border-accent/20 p-6 hover:neon-border hover:border-accent transition-all">
              <div className="text-accent text-4xl mb-4">⚡</div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Innovation</h3>
              <p className="text-foreground/70 leading-relaxed">
                Always exploring the cutting edge of smart home technology.
              </p>
            </Card>
            <Card className="bg-card border-secondary/20 p-6 hover:neon-border hover:border-secondary transition-all">
              <div className="text-secondary text-4xl mb-4">🤝</div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Community</h3>
              <p className="text-foreground/70 leading-relaxed">
                Building a community of smart home enthusiasts and innovators.
              </p>
            </Card>
          </div>

          {/* Story */}
          <Card className="bg-card border-secondary/30 p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold mb-6 text-secondary">Our Story</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                TechoraHome was born from a simple frustration: finding reliable, honest information about 
                smart home devices was nearly impossible. Every review seemed biased, incomplete, or outdated.
              </p>
              <p>
                We set out to create something different—a platform that combines rigorous testing, 
                transparent methodology, and a genuine passion for smart home technology. Our reviews 
                are comprehensive, our recommendations are earned, and our commitment to our community is unwavering.
              </p>
              <p>
                Today, thousands of readers trust TechoraHome to help them make informed decisions about 
                the technology that powers their homes. We're proud to be part of your journey toward a 
                smarter, more connected future.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  )
}
