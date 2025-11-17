import { Header } from '@/components/header'
import { HeroPulse } from '@/components/hero-pulse'
import { ConnectedHarmony } from '@/components/connected-harmony'
import { ProductCarousel } from '@/components/product-carousel'
import { VideoSection } from '@/components/video-section'
import { InteractivePanel } from '@/components/interactive-panel'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroPulse />
      <ConnectedHarmony />
      <ProductCarousel />
      <VideoSection />
      <InteractivePanel />
      <Testimonials />
      <Footer />
      <CookieBanner />
    </main>
  )
}
