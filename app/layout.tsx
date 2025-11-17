import type { Metadata } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'
import { NeonCursor } from '@/components/neon-cursor'
import { FloatingParticles } from '@/components/floating-particles'
import './globals.css'

const rajdhani = Rajdhani({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-sans'
});

const orbitron = Orbitron({ 
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: '--font-display'
});

export const metadata: Metadata = {
  title: 'TechoraHome - Where Smart Meets Sound',
  description: 'Your home. Amplified. Explore the future of smart home technology with TechoraHome.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${orbitron.variable} font-sans antialiased`}>
        <FloatingParticles />
        <NeonCursor />
        {children}
      </body>
    </html>
  )
}
