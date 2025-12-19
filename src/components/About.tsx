export default function About() {
  const pillars = [
    {
      title: 'Ancient Wisdom',
      description: 'Knowledge refined over millennia. Stoicism, Eastern philosophy, indigenous traditions—encoded into digital experiences.',
      icon: '📜',
    },
    {
      title: 'Future Tech',
      description: 'AI, biometrics, neural interfaces. We build at the bleeding edge to make the timeless accessible.',
      icon: '🔮',
    },
    {
      title: 'Human Potential',
      description: 'Every tool expands what\'s possible. Cognitive enhancement, cellular optimization, consciousness exploration.',
      icon: '⚡',
    },
  ]

  return (
    <section id="about" className="py-24 bg-void-900/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[150px]"></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="section-heading">
              <span className="text-neon-blue glow-text">//</span> About
            </h2>
            <p className="text-void-300 text-lg leading-relaxed mb-6">
              The Wisdom Frontiers Society is a collective of scientists, explorers,
              and builders working at the intersection of ancient wisdom and emerging
              technology.
            </p>
            <p className="text-void-400 leading-relaxed mb-8">
              We believe the deepest truths of human existence have been discovered
              countless times across cultures and centuries. Our mission is to build
              modern interfaces to this timeless knowledge—tools that help you think
              clearer, heal faster, and reach further.
            </p>

            {/* Mission quote */}
            <div className="card-cyber p-8 glow-box">
              <div className="text-neon-blue text-4xl mb-4" style={{ fontFamily: 'serif' }}>"</div>
              <blockquote className="text-xl text-white italic leading-relaxed">
                The frontier is not a place. It&apos;s the edge of what you know.
              </blockquote>
              <cite
                className="block mt-4 text-neon-blue font-semibold uppercase tracking-wider"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                — WFS Manifesto
              </cite>
            </div>
          </div>

          {/* Right - Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="card-cyber p-6 flex gap-6 group"
              >
                <div className="icon-cyber flex-shrink-0 group-hover:shadow-neon-lg">
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-void-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
