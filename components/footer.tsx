import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-primary neon-glow text-primary flex items-center justify-center font-display font-bold">
                T
              </div>
              <span className="font-display text-lg font-bold text-primary">TechoraHome</span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Where smart meets sound. Experience the future of connected living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© 2025 TechoraHome.com. All rights reserved.</p>
            <p className="text-center">
              Amazon Affiliate Partner.{' '}
              <span className="text-primary">
                As an Amazon Associate, we earn from qualifying purchases.
              </span>
            </p>
          </div>
        </div>

        {/* Sound Wave Animation */}
        <div className="mt-8 flex justify-center gap-1 h-8">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${0.5 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
