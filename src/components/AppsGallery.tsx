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
    <section id="apps" className="py-20 bg-void-900/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Our <span className="text-gold-500">Apps</span>
          </h2>
          <p className="section-subheading mx-auto">
            Tools crafted to illuminate your journey through the frontiers of wisdom.
          </p>
        </div>

        {filteredApps.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-cream-400 text-lg">No apps in this category yet. Coming soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => {
              const category = getCategory(app.category)
              return (
                <div
                  key={app.id}
                  className={`group card-futuristic p-6 relative overflow-hidden ${
                    app.featured ? 'ring-1 ring-gold-500/30' : ''
                  }`}
                >
                  {/* Featured badge */}
                  {app.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-gold-500/20 text-gold-400 rounded-full border border-gold-500/30">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* App Icon */}
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${category?.color}15`,
                        boxShadow: `0 0 20px ${category?.color}20`,
                      }}
                    >
                      {app.icon}
                    </div>
                  </div>

                  {/* App Info */}
                  <h3 className="text-xl font-semibold text-cream-50 mb-2 group-hover:text-gold-400 transition-colors">
                    {app.name}
                  </h3>

                  {/* Category tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${category?.color}20`,
                        color: category?.color,
                      }}
                    >
                      {category?.name}
                    </span>
                  </div>

                  <p className="text-cream-400 mb-4 leading-relaxed text-sm">
                    {app.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-void-800 text-cream-400 rounded-md border border-gold-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Status & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-gold-500/10">
                    <span
                      className={`text-sm font-medium flex items-center gap-1.5 ${
                        app.status === 'live'
                          ? 'text-green-400'
                          : app.status === 'beta'
                          ? 'text-amber-400'
                          : 'text-cream-500'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          app.status === 'live'
                            ? 'bg-green-400 animate-pulse'
                            : app.status === 'beta'
                            ? 'bg-amber-400'
                            : 'bg-cream-600'
                        }`}
                      ></span>
                      {app.status === 'live'
                        ? 'Live'
                        : app.status === 'beta'
                        ? 'Beta'
                        : 'Coming Soon'}
                    </span>

                    {app.url && (
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gold-500 hover:text-gold-400 transition-colors group/link"
                      >
                        Launch
                        <svg
                          className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
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
