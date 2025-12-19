import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-950 relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 stars-bg opacity-60"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-gold/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-blue/10 rounded-full blur-[120px]"></div>

      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12 animate-float">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary-gold/20 blur-3xl rounded-full scale-150"></div>
              <Image
                src="/logo.svg"
                alt="Wisdom Frontiers Society"
                width={120}
                height={120}
                className="relative mx-auto"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="heading-display text-6xl md:text-7xl lg:text-8xl mb-8">
            Wisdom Frontiers
            <br />
            <span className="text-primary-gold">Society</span>
          </h1>

          {/* Divider */}
          <div className="divider mb-8"></div>

          {/* Tagline */}
          <p className="text-stone-400 text-xl md:text-2xl mb-4">
            Ancient Knowledge · Future Innovation
          </p>

          <p className="text-stone-500 mb-12 max-w-2xl mx-auto">
            We build tools that bridge timeless wisdom with emerging technology.
            Portals to expanded consciousness for the modern seeker.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#apps" className="btn-primary">
              Enter the Observatory
            </a>
            <a href="#about" className="btn-secondary">
              Our Mission
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-stone-700 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary-gold rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
