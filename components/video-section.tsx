'use client'

export function VideoSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1000 400">
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M 0 ${200 + Math.sin(i * 0.5) * 100} Q 250 ${150 + Math.sin(i * 0.5) * 80}, 500 ${200 + Math.sin(i * 0.5) * 100} T 1000 ${200 + Math.sin(i * 0.5) * 100}`}
              fill="none"
              stroke="rgba(0, 255, 249, 0.3)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-secondary text-balance">
          Sound of Technology
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg text-balance">
          Experience the symphony of smart home innovation
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden neon-border border-secondary/40 bg-muted">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Smart Home Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
