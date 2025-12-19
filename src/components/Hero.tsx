import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center animated-bg overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[120px] animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hyper-500/10 rounded-full blur-[150px]"></div>

      <div className="section-container relative z-10 pt-24 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12 animate-float">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-neon-blue/20 blur-3xl rounded-full"></div>
              <Image
                src="/logo.svg"
                alt="Wisdom Frontiers Society"
                width={200}
                height={200}
                className="relative mx-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-white">WISDOM</span>{' '}
            <span className="text-neon-blue glow-text">FRONTIERS</span>
            <br />
            <span className="text-white">SOCIETY</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-void-300 mb-6 tracking-wide uppercase" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 500 }}>
            Ancient Knowledge × Future Innovation
          </p>

          <p className="text-void-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            We build portals to expanded consciousness. Tools that merge timeless wisdom
            with cutting-edge technology. Enter the frontier.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#apps" className="btn-primary group">
              Enter Portal
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[
              { value: '5', label: 'Founders' },
              { value: '∞', label: 'Frontiers' },
              { value: '1', label: 'Mission' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-neon-blue glow-text mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-void-400 text-sm uppercase tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-8 h-14 border-2 border-neon-blue/40 rounded-full flex justify-center p-2">
            <div className="w-2 h-4 bg-neon-blue rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
