import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-parchment-50">
      <div className="section-container py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-16">
            <Image
              src="/logo.svg"
              alt="Wisdom Frontiers Society"
              width={140}
              height={140}
              className="mx-auto"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8">
            Wisdom Frontiers
            <br />
            <span className="text-primary-blue">Society</span>
          </h1>

          {/* Divider */}
          <div className="divider mb-8"></div>

          {/* Tagline */}
          <p className="text-body text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Where ancient knowledge meets modern innovation.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#apps" className="btn-primary">
              Explore
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
