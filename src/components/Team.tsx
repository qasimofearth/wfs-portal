import { team } from '@/data/team'

export default function Team() {
  return (
    <section id="founders" className="py-32 bg-white">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="heading-display text-4xl md:text-5xl mb-6">
            Founders
          </h2>
          <div className="divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-stone-100 border-2 border-stone-200 flex items-center justify-center">
                <span className="heading-display text-3xl text-stone-400">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <h3 className="heading-display text-2xl mb-2">
                {member.name}
              </h3>
              <p className="text-primary-blue font-medium text-sm uppercase tracking-wider mb-6">
                {member.role}
              </p>
              <p className="text-body">
                {member.bio}
              </p>

              {/* Links */}
              {member.links && (
                <div className="flex items-center justify-center gap-6 mt-8">
                  {member.links.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-primary-blue transition-colors"
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
                      className="text-stone-400 hover:text-primary-blue transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
