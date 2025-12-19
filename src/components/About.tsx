export default function About() {
  return (
    <section id="about" className="py-32 bg-stone-900 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-display text-5xl md:text-6xl mb-6">
              About
            </h2>
            <div className="divider"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-body text-lg">
              <p>
                The Wisdom Frontiers Society is a collective of scientists, explorers,
                and builders working at the intersection of ancient knowledge and
                emerging technology.
              </p>
              <p>
                We believe the deepest truths of human existence have been discovered
                many times across cultures and centuries. Our mission is to build
                modern interfaces to this timeless wisdom.
              </p>
            </div>

            <div className="card-glass p-8">
              <blockquote className="heading-display text-2xl md:text-3xl text-white italic mb-4">
                "The frontier is not a place. It's the edge of what you know."
              </blockquote>
              <div className="divider mb-4"></div>
              <cite className="text-mono text-xs text-primary-gold uppercase tracking-wider">
                WFS Manifesto
              </cite>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: 'Ancient',
                description: 'Wisdom refined over millennia—philosophy, contemplative traditions, indigenous knowledge.',
              },
              {
                title: 'Modern',
                description: 'Cutting-edge technology—AI, neuroscience, biometrics—to make the timeless accessible.',
              },
              {
                title: 'Infinite',
                description: 'Boundless potential for human understanding, growth, and consciousness expansion.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="text-center">
                <h3 className="heading-display text-2xl text-primary-gold mb-4">
                  {pillar.title}
                </h3>
                <p className="text-body text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
