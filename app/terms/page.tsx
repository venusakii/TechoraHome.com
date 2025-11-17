import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-primary text-balance">
            Terms of Service
          </h1>
          <p className="text-foreground/60 mb-12">Last updated: November 2025</p>

          <Card className="bg-card border-primary/20 p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">1. Acceptance of Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing and using TechoraHome.com, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">2. Use License</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Permission is granted to temporarily access the materials on TechoraHome for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Under this license you may not: modify or copy the materials; use the materials for any 
                commercial purpose; attempt to reverse engineer any software contained on the website; 
                remove any copyright or other proprietary notations from the materials.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">3. Affiliate Disclosure</h2>
              <p className="text-foreground/80 leading-relaxed">
                TechoraHome participates in the Amazon Services LLC Associates Program and other affiliate 
                programs. We earn commissions from qualifying purchases made through links on our site. 
                This does not affect the price you pay and helps support our content creation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">4. Disclaimer</h2>
              <p className="text-foreground/80 leading-relaxed">
                The materials on TechoraHome are provided on an 'as is' basis. We make no warranties, 
                expressed or implied, and hereby disclaim all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or 
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">5. Limitations</h2>
              <p className="text-foreground/80 leading-relaxed">
                In no event shall TechoraHome or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">6. Revisions</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may revise these terms of service at any time without notice. By using this website you 
                are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">7. Contact</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about these Terms, please contact us at legal@techorahome.com
              </p>
            </section>
          </Card>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  )
}
