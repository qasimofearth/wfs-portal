'use client'

import { apps } from '@/data/apps'
import { categories } from '@/data/categories'

interface AppsGalleryProps {
  selectedCategory: string | null
}

export default function AppsGallery({ selectedCategory }: AppsGalleryProps) {
  const filteredApps = selectedCategory
    ? apps.filter((app) => app.category === selectedCategory)
    : apps

  const getCategory = (categoryId: string) =>
    categories.find((c) => c.id === categoryId)

  return (
    <section id="apps" className="py-24 bg-void-950 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="text-neon-blue glow-text">[</span> APPS <span className="text-neon-blue glow-text">]</span>
          </h2>
          <p className="section-subheading mx-auto">
            Portals to expanded consciousness. Each app is a gateway to a different frontier.
          </p>
        </div>

        {filteredApps.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔮</div>
            <p className="text-void-400 text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Coming soon to this frontier...
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app) => {
              const category = getCategory(app.category)
              return (
                <div
                  key={app.id}
                  className={`group card-cyber p-8 ${
                    app.featured ? 'ring-2 ring-neon-blue/50 shadow-neon' : ''
                  }`}
                >
                  {/* Featured badge */}
                  {app.featured && (
                    <div className="absolute top-6 right-6">
                      <span
                        className="px-3 py-1.5 text-xs font-bold bg-neon-blue text-void-950 rounded-lg uppercase tracking-wider"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        Live
                      </span>
                    </div>
                  )}

                  {/* App Icon */}
                  <div className="mb-6">
                    <div className="icon-cyber group-hover:scale-110 group-hover:shadow-neon-lg">
                      {app.icon}
                    </div>
                  </div>

                  {/* App Info */}
                  <h3
                    className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {app.name}
                  </h3>

                  {/* Category tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="tag-cyber">
                      {category?.icon} {category?.name}
                    </span>
                  </div>

                  <p className="text-void-400 mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-void-800/80 text-void-300 rounded-lg border border-void-700"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Status & Link */}
                  <div className="flex items-center justify-between pt-6 border-t border-neon-blue/10">
                    <span
                      className={`text-sm font-semibold flex items-center gap-2 uppercase tracking-wider ${
                        app.status === 'live'
                          ? 'text-neon-green'
                          : app.status === 'beta'
                          ? 'text-neon-purple'
                          : 'text-void-500'
                      }`}
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          app.status === 'live'
                            ? 'bg-neon-green animate-pulse'
                            : app.status === 'beta'
                            ? 'bg-neon-purple animate-pulse'
                            : 'bg-void-600'
                        }`}
                      ></span>
                      {app.status === 'live'
                        ? 'Online'
                        : app.status === 'beta'
                        ? 'Beta'
                        : 'Coming Soon'}
                    </span>

                    {app.url && (
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-bold text-neon-blue hover:text-white transition-colors group/link uppercase tracking-wider"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                      >
                        Launch
                        <svg
                          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
