import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center animated-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <Image
              src="/logo.svg"
              alt="Wisdom Frontiers Society"
              width={180}
              height={180}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-cream-50">Wisdom</span>{' '}
            <span className="text-gold-500 glow-text">Frontiers</span>{' '}
            <span className="text-cream-50">Society</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-cream-300 mb-4 font-light">
            Where Ancient Knowledge Meets Future Innovation
          </p>

          <p className="text-cream-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore the intersection of timeless wisdom and cutting-edge technology.
            Our apps are portals to deeper understanding, designed to expand your mind
            and elevate your existence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apps" className="btn-primary">
              Explore Apps
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#about" className="btn-secondary">
              Our Mission
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-gold-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
