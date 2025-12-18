export default function About() {
  const pillars = [
    {
      title: 'Ancient Wisdom',
      description:
        'We draw from the wellspring of human knowledge—philosophies, practices, and insights refined over millennia.',
      icon: '📜',
      color: '#D4A843',
    },
    {
      title: 'Modern Innovation',
      description:
        'We harness cutting-edge technology to make timeless wisdom accessible, interactive, and applicable.',
      icon: '⚡',
      color: '#C45C3E',
    },
    {
      title: 'Infinite Growth',
      description:
        'Like the infinity symbol in our logo, we believe in boundless potential for human understanding and evolution.',
      icon: '∞',
      color: '#A78BFA',
    },
  ]

  return (
    <section id="about" className="py-24 bg-void-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent"></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="section-heading">
              About <span className="text-gold-500">WFS</span>
            </h2>
            <p className="text-cream-300 text-lg leading-relaxed mb-6">
              The Wisdom Frontiers Society exists at the intersection of ancient
              knowledge and future possibility. We believe that the deepest
              truths of human existence have been discovered many times over, but
              each generation must find new ways to access and apply them.
            </p>
            <p className="text-cream-400 leading-relaxed mb-8">
              Our apps are not mere tools—they are portals. Each one is designed
              to help you explore a different frontier of wisdom, whether it&apos;s
              the stoic philosophy of ancient Rome, the breathing techniques of
              Himalayan masters, or the financial principles of history&apos;s
              greatest wealth builders.
            </p>

            {/* Mission quote */}
            <div className="card-futuristic p-6 glow-box">
              <blockquote className="text-xl text-cream-200 italic">
                &ldquo;The only true wisdom is in knowing you know nothing.&rdquo;
              </blockquote>
              <cite className="block mt-3 text-gold-500 font-medium">— Socrates</cite>
            </div>
          </div>

          {/* Right - Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="card-futuristic p-6 flex gap-5 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${pillar.color}15`,
                    boxShadow: `0 0 20px ${pillar.color}15`,
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cream-50 mb-1 group-hover:text-gold-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-cream-400 text-sm leading-relaxed">
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
