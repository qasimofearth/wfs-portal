export default function About() {
  return (
    <section id="about" className="py-32 bg-parchment-100">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl md:text-5xl mb-6">
              About
            </h2>
            <div className="divider"></div>
          </div>

          <div className="space-y-8 text-body text-lg">
            <p>
              The Wisdom Frontiers Society exists at the intersection of ancient
              knowledge and emerging technology. We believe the deepest truths of
              human existence have been discovered many times across cultures and
              centuries.
            </p>

            <p>
              Our mission is to build modern interfaces to this timeless wisdom—tools
              that help people think clearer, heal faster, and reach further.
            </p>

            <blockquote className="border-l-4 border-primary-yellow pl-8 py-4 my-12">
              <p className="heading-display text-2xl md:text-3xl text-stone-800 italic">
                "The frontier is not a place. It's the edge of what you know."
              </p>
            </blockquote>

            <p>
              We draw from the wellspring of human knowledge—philosophy, contemplative
              traditions, and scientific research—and encode it into digital experiences
              designed for the modern world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
