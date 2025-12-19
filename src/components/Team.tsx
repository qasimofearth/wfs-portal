import { team } from '@/data/team'

export default function Team() {
  return (
    <section id="founders" className="py-32 bg-stone-950 relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 stars-bg opacity-30"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="heading-display text-5xl md:text-6xl mb-6">
            Founders
          </h2>
          <div className="divider mb-6"></div>
          <p className="text-body text-lg max-w-xl mx-auto">
            Scientists, explorers, and builders pushing the boundaries of human potential.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <div key={member.id} className="card-glass p-8 text-center group">
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 border border-primary-gold/30 flex items-center justify-center group-hover:border-primary-gold/50 transition-all">
                <span className="heading-display text-2xl text-primary-gold">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <h3 className="heading-display text-xl mb-1 group-hover:text-primary-gold transition-colors">
                {member.name}
              </h3>
              <p className="text-mono text-xs text-primary-gold/70 uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-body text-sm">
                {member.bio}
              </p>

              {/* Links */}
              {member.links && (
                <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/5">
                  {member.links.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-primary-gold transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </a>
                  )}
                  {member.links.twitter && (
                    <a
                      href={member.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-primary-gold transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-primary-gold transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
