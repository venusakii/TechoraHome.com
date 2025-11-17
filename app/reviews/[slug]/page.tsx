'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ProductReviewClient from './product-review-client'

const productData: Record<string, any> = {
  'atomic-habits': {
    name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    category: 'Books',
    price: '$12.99',
    amazonUrl: 'https://www.amazon.com/Like-New-release-vibrant-helpful-routines/dp/B09RX3512T',
    images: [
      'https://m.media-amazon.com/images/I/61XxVmn3HKL._AC_SX679_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.8,
    totalReviews: 15000,
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving--every day by 1 percent, stacking small changes on top of one another.',
    features: [
      'Build good habits and break bad ones',
      'Proven framework for daily improvement',
      'Practical strategies for lasting change',
      'Science-backed insights on habit formation',
      'Applicable to any goal or area of life',
      'Easy-to-read and actionable advice',
    ],
    specs: [
      { label: 'Format', value: 'Paperback' },
      { label: 'Pages', value: '320' },
      { label: 'Publisher', value: 'Avery' },
      { label: 'Publication Date', value: 'October 16, 2018' },
      { label: 'ISBN-10', value: '0735211299' },
    ],
    reviews: [
      { author: 'James Clear Fan', rating: 5, text: 'Transformed my daily routine. Simple yet powerful concepts.' },
      { author: 'Productivity Guru', rating: 5, text: 'Best book on habits I\'ve read. Highly recommend!' },
      { author: 'Motivation Seeker', rating: 4, text: 'Great read, but requires consistent application.' },
    ],
  },
  'philips-hue-starter': {
    name: 'Philips Hue Starter Kit: Bridge Pro + 3 A19 E26 Smart Bulbs + Button, White & Color Ambiance',
    category: 'Lighting',
    price: '$219.99',
    amazonUrl: 'https://www.amazon.com/Philips-Hue-Starter-Kit-SmartThings/dp/B0FMGKHCGH',
    images: [
      'https://m.media-amazon.com/images/I/71xDTHjgoWL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.6,
    totalReviews: 50,
    description: 'Get started with the next generation of the Hue smart hub, now wireless so you can place it anywhere, and packed with updates including the ability to turn your lights into motion sensors using MotionAware™ technology.',
    features: [
      'WHAT\'S IN THE BOX: This starter kit includes one Hue Bridge Pro, one smart button, and three A19 E26 LED smart bulbs',
      'MORE CAPACITY: Migrate all your existing Hue devices to the new Bridge and add more with support for 150+ lights',
      'HUE MotionAware: Program your lights to switch on automatically when movement is detected',
      'MORE FEATURES: Add a Bridge to unlock Hue Sync lighting, security integration, and capacity to store 500 scenes',
      'WHITE AND COLOR AMBIANCE: With tunable warm-to-cool white light and 16 million colors to choose from',
      'CUSTOMIZABLE CONTROLS: Light your home the way you like using three color-capable A19 E26 LED smart bulbs and a smart button',
    ],
    specs: [
      { label: 'Light Type', value: 'LED' },
      { label: 'Wattage', value: '10.5 watts' },
      { label: 'Bulb Base', value: 'E26' },
      { label: 'Connectivity', value: 'Zigbee' },
      { label: 'Voltage', value: '130 Volts' },
    ],
    reviews: [
      { author: 'Verified Purchase', rating: 5, text: 'Philips has unveiled the Hue Bridge Pro, a major upgrade to its smart lighting hub. Seamless migration.' },
      { author: 'R369AF2SVF41QT', rating: 5, text: 'Versatile Lighting Options: The bulbs provide millions of colors, dynamic effects, and adjustable warm-to-cool white light.' },
      { author: 'R3L5167A52XUI3', rating: 5, text: 'Works great, good bundle price. Hue is top of the line for smart lights.' },
    ],
  },
  'ring-doorbell': {
    name: 'Ring Battery Doorbell Plus',
    category: 'Security',
    price: '$79.99',
    amazonUrl: 'https://www.amazon.com/All-new-Ring-Battery-Doorbell-detection/dp/B09WZBPX7K',
    images: [
      'https://m.media-amazon.com/images/I/51PtzlFkR9L._SX679_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.5,
    totalReviews: 14008,
    description: 'From grocery deliveries to an unwanted late-night visitor, with the upgraded Battery Doorbell Plus, you’ll see every detail in HD+ and an expanded field of view, and can respond right from the Ring App.',
    features: [
      'Head-to-Toe HD+ Video in 1536p, Color Night Vision, and advanced motion settings',
      'Two-Way Talk & Quick Replies, mobile notifications, Customizable Motion Zones',
      'Easily power your device with the Quick Release Battery Pack',
      'Package Detection and Alerts (requires Ring Home Plan)',
      'Customizable Privacy Settings',
      'Works with Alexa for hands-free home monitoring',
    ],
    specs: [
      { label: 'Dimensions', value: '5.06 x 2.44 x 1.11 inches' },
      { label: 'Weight', value: '8.3 ounces' },
      { label: 'Video Quality', value: '1536p HD+' },
      { label: 'Connectivity', value: 'WiFi (2.4 GHz)' },
      { label: 'Power', value: 'Battery-powered' },
    ],
    reviews: [
      { author: 'Anonymous', rating: 5, text: 'The Ring Battery Doorbell Plus is a huge upgrade. The head-to-toe HD+ video quality is crystal clear.' },
      { author: 'Irantha Jayawardena', rating: 5, text: 'Good product, works well. Would be better if the ring subscription is a bit cheaper.' },
      { author: 'Aaron In Aus', rating: 5, text: 'Swapped out a standard Ring doorbell for the plus model. Much better field of view now.' },
    ],
  },
  'nest-thermostat': {
    name: 'Google Nest Learning Thermostat 4th Gen',
    category: 'Energy',
    price: '$279.99',
    amazonUrl: 'https://www.amazon.com/Google-Nest-Learning-Thermostat-Programmable/dp/B0DZDB98JG',
    images: [
      'https://m.media-amazon.com/images/I/51wLt4jvhZL._AC_SX679_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.6,
    totalReviews: 2000,
    description: 'Nest Learning Thermostat has been completely reimagined. It\'s designed to work with every home, every AC, every furnace, every boiler, every system. You can control it from anywhere with the Google Home app.',
    features: [
      'AI learns your routine and adjusts temperature',
      'New design with larger display',
      'Matter-compatible for smart home integration',
      'Energy-saving features like Home/Away Assist',
      'Works with Alexa, Google Assistant, and more',
      'Remote control via app',
    ],
    specs: [
      { label: 'Display', value: '3.5" LCD' },
      { label: 'Connectivity', value: 'Wi-Fi, Thread, Matter' },
      { label: 'Compatibility', value: 'Most 24V HVAC systems' },
      { label: 'Dimensions', value: '3.3" diameter' },
      { label: 'Power', value: 'C-wire or adapter' },
    ],
    reviews: [
      { author: 'Smart Home Enthusiast', rating: 5, text: 'Beautiful design and saves energy. Easy setup.' },
      { author: 'Eco-Conscious User', rating: 5, text: 'Learning features are spot on. Reduced bills!' },
      { author: 'Tech Reviewer', rating: 4, text: 'Great upgrade, but app could be better.' },
    ],
  },
  'sonos-amp': {
    name: 'Sonos Amp - Powers speakers for home theater and multiroom audio',
    category: 'Audio',
    price: '$699.00',
    amazonUrl: 'https://www.amazon.com/Sonos-versatile-amplifier-powering-entertainment/dp/B07LD8NN37',
    images: [
      'https://m.media-amazon.com/images/I/51wLlcqZ8aL._AC_SX679_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.7,
    totalReviews: 500,
    description: 'Stream everything you love with the Sonos Amp. Power your speakers with this versatile amplifier for home theater and multiroom audio.',
    features: [
      '125 watts per channel at 8 ohms',
      'HDMI ARC for TV audio',
      'AirPlay 2, WiFi, Ethernet',
      'Works with Sonos ecosystem',
      'Rack mountable',
      'Control via app or voice',
    ],
    specs: [
      { label: 'Power Output', value: '125W x 2 @ 8 ohms' },
      { label: 'Dimensions', value: '8.54 x 2.19 x 8.54 inches' },
      { label: 'Weight', value: '4.4 lbs' },
      { label: 'Connectivity', value: 'HDMI ARC, WiFi, Ethernet' },
      { label: 'Audio Inputs', value: 'Line-in, Subwoofer' },
    ],
    reviews: [
      { author: 'Audio Aficionado', rating: 5, text: 'Powers my speakers perfectly. Seamless Sonos integration.' },
      { author: 'Home Theater Fan', rating: 5, text: 'Great for TV audio. Compact and powerful.' },
      { author: 'Multiroom User', rating: 4, text: 'Excellent amp, but pricey for what it is.' },
    ],
  },
  'wyze-cam-pan': {
    name: 'WYZE Cam Pan v3, Indoor/Outdoor IP65-Rated 1080p Pan/Tilt/Zoom Wi-Fi Smart Home Security Camera',
    category: 'Security',
    price: '$39.98',
    amazonUrl: 'https://www.amazon.com/WYZE-IP65-Rated-Security-Compatible-Assistant/dp/B0B9TWY11Q',
    images: [
      'https://m.media-amazon.com/images/I/61zQmZVmeKL._AC_SX679_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.3,
    totalReviews: 28883,
    description: 'Experience comprehensive surveillance with the Wyze Cam Pan v3, a versatile security camera that offers both indoor and outdoor monitoring capabilities.',
    features: [
      'Full 1080p HD Clarity with Pan Scan Auto Patrol: 360° pan and 180° tilt coverage',
      'Stunning Color Night Vision for Low-Light Environments',
      'AI-Powered Motion Tracking for Pets & People',
      'True Outdoor Durability with IP65 Rating',
      'Clear Two-Way Talk with Enhanced Audio',
      'Local or Cloud Storage—Your Choice, No Subscription Needed',
    ],
    specs: [
      { label: 'Dimensions', value: '2.48 x 2.36 x 4.88 inches' },
      { label: 'Weight', value: '11.29 Ounces' },
      { label: 'Video Resolution', value: '1080p' },
      { label: 'Connectivity', value: 'Wi-Fi (2.4GHz)' },
      { label: 'Waterproof Rating', value: 'IP65' },
    ],
    reviews: [
      { author: 'Anonymous', rating: 5, text: 'Incredible function and performance for the cost. The tilt on this one is nice.' },
      { author: 'Anonymous', rating: 5, text: 'Great camera with great quality. Easy setup easy app very responsive.' },
      { author: 'Anonymous', rating: 1, text: 'Connectivity issues, constantly having to restart the camera.' },
    ],
  },
  'kasa-smart-plug': {
    name: 'Kasa Smart Plug HS103P4, Smart Home Wi-Fi Outlet Works with Alexa, Echo, Google Home & IFTTT, No Hub Required',
    category: 'Smart Home',
    price: '$25.99',
    amazonUrl: 'https://www.amazon.com/TP-Link-Kasa-Smart-Wifi-Plug/dp/B07RCNB2L3',
    images: [
      'https://m.media-amazon.com/images/I/51zoLDBO0wL._SX522_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.6,
    totalReviews: 77574,
    description: 'The HS103 Kasa smart plug is the easiest way you can start controlling lamps, fans, humidifiers and other home electronic appliances.',
    features: [
      'Voice control with Amazon Alexa or Google Assistant for hands-free operation',
      'Remote control of smart home devices from anywhere using the Kasa app',
      'Scheduling with timer or countdown to automatically turn on/off appliances',
      'Easy setup requiring 2.4GHz Wi-Fi connection via the Kasa app',
      'UL certified for safety',
      'No hub required; works with IFTTT for automation',
    ],
    specs: [
      { label: 'Current Rating', value: '15 Amps' },
      { label: 'Voltage', value: '120 Volts (AC)' },
      { label: 'Wattage', value: '1800 watts' },
      { label: 'Connectivity', value: 'Wi-Fi (2.4GHz)' },
      { label: 'Dimensions', value: '1.57 x 1.5 x 2.62 inches' },
    ],
    reviews: [
      { author: 'Anonymous', rating: 5, text: 'These work great, are easy to setup, easy to program and perform perfectly all the time.' },
      { author: 'Patricia', rating: 5, text: 'Great smart device that works well. Very reliable in regards to connectivity.' },
      { author: 'Gerardo', rating: 5, text: 'Su configuración fue rápida y sencilla. 100% compatible con Alexa.' },
    ],
  },
  'govee-permanent-lights': {
    name: 'Govee Permanent Outdoor Lights Pro, 100FT Smart Wi-Fi Light Bars, IP67 Waterproof, Permanent Outdoor RGBIC LED Strip Lights',
    category: 'Lighting',
    price: '$299.99',
    amazonUrl: 'https://www.amazon.com/Govee-Permanent-Lighting-Waterproof-Assistant/dp/B0DX1WPB9J',
    images: [
      'https://m.media-amazon.com/images/I/71zGM87UFOL._AC_SX679_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.5,
    totalReviews: 1000,
    description: 'Govee Permanent Outdoor Lights Pro offer year-round lighting with smart control and vibrant colors. Easy installation and weatherproof design.',
    features: [
      '100FT coverage with 36 light bars',
      'RGBIC technology for individual segment control',
      'IP67 waterproof rating',
      'Works with Alexa and Google Assistant',
      'App control with scenes and music sync',
      'DIY mode for custom designs',
    ],
    specs: [
      { label: 'Length', value: '100FT' },
      { label: 'IP Rating', value: 'IP67' },
      { label: 'Connectivity', value: 'Wi-Fi, Bluetooth' },
      { label: 'Power', value: 'Adapter included' },
      { label: 'Light Color', value: 'RGBIC' },
    ],
    reviews: [
      { author: 'Outdoor Decorator', rating: 5, text: 'Stunning lights for the holidays and beyond. Easy app control.' },
      { author: 'Smart Home User', rating: 5, text: 'Vibrant colors and durable. Integrates well with Alexa.' },
      { author: 'Installer', rating: 4, text: 'Great product, but installation takes time.' },
    ],
  },
  'august-smart-lock': {
    name: 'August Wi-Fi Smart Lock',
    category: 'Security',
    price: '$199.99',
    amazonUrl: 'https://www.amazon.com/August-Smart-Lock-Connect-technology/dp/B0752V8D8D',
    images: [
      'https://m.media-amazon.com/images/I/519AkRwE2pL._AC_SX679_.jpg',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    rating: 4.4,
    totalReviews: 8000,
    description: 'The August Smart Lock connects to your existing deadbolt, making your home smarter and more secure. Works with Alexa, Google Assistant, and more.',
    features: [
      'Fits over existing deadbolt',
      'Auto-unlock with geofencing',
      'Remote access via app',
      'Share digital keys with guests',
      'Activity monitoring',
      'Voice control compatible',
    ],
    specs: [
      { label: 'Connectivity', value: 'Wi-Fi, Bluetooth' },
      { label: 'Battery Life', value: 'Up to 3 months' },
      { label: 'Compatibility', value: 'Most single-cylinder deadbolts' },
      { label: 'Dimensions', value: '2.8" x 3.1" x 1.42"' },
      { label: 'Weight', value: '10.7 oz' },
    ],
    reviews: [
      { author: 'Home Owner', rating: 5, text: 'Easy installation and reliable. Love the auto-lock feature.' },
      { author: 'Guest Manager', rating: 5, text: 'Perfect for sharing access with family. App is user-friendly.' },
      { author: 'Security Conscious', rating: 4, text: 'Good lock, but battery drains faster than expected.' },
    ],
  },
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productData[slug] || productData['echo-dot-5']

  return (
    <main className="min-h-screen">
      <Header />
      <ProductReviewClient product={product} />
      <Footer />
      <CookieBanner />
    </main>
  )
}
