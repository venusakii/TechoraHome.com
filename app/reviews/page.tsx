'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { ProductCard } from '@/components/product-card'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const categories = ['All', 'Lighting', 'Security', 'Energy', 'Audio']

const products = [
  {
    id: 'atomic-habits',
    name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    category: 'Books',
    price: '$12.99',
    image: 'https://m.media-amazon.com/images/I/61XxVmn3HKL._AC_SX679_.jpg',
    rating: 4.8,
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving--every day by 1 percent, stacking small changes on top of one another.',
  },
  {
    id: 'philips-hue-starter',
    name: 'Philips Hue Starter Kit: Bridge Pro + 3 A19 E26 Smart Bulbs + Button, White & Color Ambiance',
    category: 'Lighting',
    price: '$219.99',
    image: 'https://m.media-amazon.com/images/I/71xDTHjgoWL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg',
    rating: 4.6,
    description: 'Get started with the next generation of the Hue smart hub, now wireless so you can place it anywhere, and packed with updates including the ability to turn your lights into motion sensors using MotionAware™ technology.',
  },
  {
    id: 'ring-doorbell',
    name: 'Ring Battery Doorbell Plus',
    category: 'Security',
    price: '$79.99',
    image: 'https://m.media-amazon.com/images/I/51PtzlFkR9L._SX679_.jpg',
    rating: 4.5,
    description: 'From grocery deliveries to an unwanted late-night visitor, with the upgraded Battery Doorbell Plus, you’ll see every detail in HD+ and an expanded field of view, and can respond right from the Ring App.',
  },
  {
    id: 'nest-thermostat',
    name: 'Google Nest Learning Thermostat 4th Gen',
    category: 'Energy',
    price: '$165.99',
    image: 'https://m.media-amazon.com/images/I/51wLt4jvhZL._AC_SX679_.jpg',
    rating: 4.6,
    description: 'Nest Learning Thermostat has been completely reimagined. It\'s designed to work with every home, every AC, every furnace, every boiler, every system. You can control it from anywhere with the Google Home app.',
  },
  {
    id: 'sonos-amp',
    name: 'Sonos Amp - Powers speakers for home theater and multiroom audio',
    category: 'Audio',
    price: '$699.00',
    image: 'https://m.media-amazon.com/images/I/51wLlcqZ8aL._AC_SX679_.jpg',
    rating: 4.7,
    description: 'Stream everything you love with the Sonos Amp. Power your speakers with this versatile amplifier for home theater and multiroom audio.',
  },
  {
    id: 'wyze-cam-pan',
    name: 'WYZE Cam Pan v3, Indoor/Outdoor IP65-Rated 1080p Pan/Tilt/Zoom Wi-Fi Smart Home Security Camera',
    category: 'Security',
    price: '$39.98',
    image: 'https://m.media-amazon.com/images/I/61zQmZVmeKL._AC_SX679_.jpg',
    rating: 4.3,
    description: 'Experience comprehensive surveillance with the Wyze Cam Pan v3, a versatile security camera that offers both indoor and outdoor monitoring capabilities.',
  },
  {
    id: 'kasa-smart-plug',
    name: 'Kasa Smart Plug HS103P4, Smart Home Wi-Fi Outlet Works with Alexa, Echo, Google Home & IFTTT, No Hub Required',
    category: 'Smart Home',
    price: '$25.99',
    image: 'https://m.media-amazon.com/images/I/51zoLDBO0wL._SX522_.jpg',
    rating: 4.6,
    description: 'The HS103 Kasa smart plug is the easiest way you can start controlling lamps, fans, humidifiers and other home electronic appliances.',
  },
  {
    id: 'govee-permanent-lights',
    name: 'Govee Permanent Outdoor Lights Pro, 100FT Smart Wi-Fi Light Bars, IP67 Waterproof, Permanent Outdoor RGBIC LED Strip Lights',
    category: 'Lighting',
    price: '$299.99',
    image: 'https://m.media-amazon.com/images/I/71zGM87UFOL._AC_SX679_.jpg',
    rating: 4.5,
    description: 'Govee Permanent Outdoor Lights Pro offer year-round lighting with smart control and vibrant colors. Easy installation and weatherproof design.',
  },
  {
    id: 'august-smart-lock',
    name: 'August Wi-Fi Smart Lock',
    category: 'Security',
    price: '$199.99',
    image: 'https://m.media-amazon.com/images/I/519AkRwE2pL._AC_SX679_.jpg',
    rating: 4.4,
    description: 'The August Smart Lock connects to your existing deadbolt, making your home smarter and more secure. Works with Alexa, Google Assistant, and more.',
  },
]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,249,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container mx-auto relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-center mb-6 text-primary neon-text text-balance">
            Product Spectrum
          </h1>
          <p className="text-center text-foreground/70 text-xl max-w-3xl mx-auto text-balance">
            Curated reviews of cutting-edge smart home devices, tested and rated for the future
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`neon-border transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground neon-glow'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </main>
  )
}
