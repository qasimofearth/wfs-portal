import { team } from '@/data/team'

export default function Team() {
  return (
    <section id="team" className="py-24 bg-void-900/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            The <span className="text-gold-500">Seekers</span>
          </h2>
          <p className="section-subheading mx-auto">
            Meet the minds exploring the frontiers, building bridges between
            ancient wisdom and modern innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.id}
              className="card-futuristic p-8 text-center group"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-6 w-24 h-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500 to-terracotta-500 opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gold-500/80 to-terracotta-500/80 flex items-center justify-center ring-2 ring-gold-500/20">
                  <span className="text-2xl font-bold text-void-950">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-cream-50 mb-1">
                {member.name}
              </h3>
              <p className="text-gold-500 font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-cream-400 text-sm leading-relaxed">{member.bio}</p>

              {/* Social Links */}
              {member.links && (
                <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-gold-500/10">
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-500 hover:text-gold-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                    </a>
                  )}
                  {member.links.twitter && (
                    <a
                      href={member.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-500 hover:text-gold-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
