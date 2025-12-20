'use client'

import { planets } from '@/data/planets'
import { getAppsByPlanet } from '@/data/apps'

interface PlanetDashboardProps {
  planetId: string
  onClose: () => void
}

export default function PlanetDashboard({ planetId, onClose }: PlanetDashboardProps) {
  const planet = planets.find(p => p.id === planetId)
  const apps = getAppsByPlanet(planetId)

  if (!planet) return null

  const liveApps = apps.filter(a => a.status === 'live')
  const comingSoonApps = apps.filter(a => a.status === 'coming-soon')

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-auto animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 text-stone-400 hover:text-white transition-colors p-2 group"
      >
        <svg className="w-8 h-8 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Back to Observatory */}
      <button
        onClick={onClose}
        className="fixed top-6 left-6 z-50 text-stone-400 hover:text-white transition-colors flex items-center gap-2 text-mono text-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Observatory
      </button>

      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Planet Header */}
          <div className="text-center mb-16 animate-slide-up">
            {/* Planet visual - realistic appearance */}
            <div
              className="w-32 h-32 mx-auto mb-8 rounded-full relative"
              style={{
                background: planet.gradient,
                boxShadow: `0 0 60px ${planet.glowColor}, 0 0 120px ${planet.glowColor}, inset -15px -10px 30px rgba(0,0,0,0.4)`,
              }}
            >
              {/* Saturn rings */}
              {planet.hasRings && (
                <>
                  <div
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: '220%',
                      height: '50%',
                      border: `4px solid ${planet.ringColor}`,
                      borderRadius: '50%',
                      transform: 'translate(-50%, -50%) rotateX(70deg)',
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: '180%',
                      height: '40%',
                      border: `3px solid ${planet.ringColor?.replace('0.6', '0.3')}`,
                      borderRadius: '50%',
                      transform: 'translate(-50%, -50%) rotateX(70deg)',
                    }}
                  />
                </>
              )}
            </div>

            <h1 className="heading-display text-5xl md:text-6xl mb-4 text-white">
              {planet.name}
            </h1>
            <p className="text-mono text-sm text-primary-gold uppercase tracking-widest mb-4">
              {planet.category}
            </p>
            <p className="text-body text-xl text-stone-400 max-w-xl mx-auto">
              {planet.description}
            </p>
          </div>

          {/* Apps Section */}
          <div className="space-y-12">
            {/* Live Apps */}
            {liveApps.length > 0 && (
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="heading-display text-2xl mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  Live Apps
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {liveApps.map((app) => (
                    <a
                      key={app.id}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-glass p-6 group hover:border-primary-gold/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`,
                            border: `1px solid rgba(255,255,255,0.1)`,
                          }}
                        >
                          {app.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="heading-display text-xl mb-1 group-hover:text-primary-gold transition-colors flex items-center gap-2">
                            {app.name}
                            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </h3>
                          <p className="text-body text-sm text-stone-400 line-clamp-2">
                            {app.description}
                          </p>
                          <span className="inline-block mt-3 text-mono text-xs text-green-400 uppercase tracking-wider">
                            Launch App
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Coming Soon Apps */}
            {comingSoonApps.length > 0 && (
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="heading-display text-2xl mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-stone-600 rounded-full"></span>
                  Coming Soon
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {comingSoonApps.map((app) => (
                    <div
                      key={app.id}
                      className="card-glass p-6 opacity-60 hover:opacity-80 transition-opacity"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                            border: `1px solid rgba(255,255,255,0.05)`,
                          }}
                        >
                          {app.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="heading-display text-xl mb-1 text-stone-300">
                            {app.name}
                          </h3>
                          <p className="text-body text-sm text-stone-500 line-clamp-2">
                            {app.description}
                          </p>
                          <span className="inline-block mt-3 text-mono text-xs text-stone-600 uppercase tracking-wider">
                            In Development
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {apps.length === 0 && (
              <div className="text-center py-16 animate-slide-up">
                <p className="text-body text-lg text-stone-500">
                  No apps in this realm yet. Check back soon.
                </p>
              </div>
            )}
          </div>

          {/* Navigation to other planets */}
          <div className="mt-20 pt-10 border-t border-white/5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="heading-display text-lg text-stone-500 text-center mb-8">
              Explore Other Worlds
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {planets
                .filter(p => p.id !== planetId)
                .map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onClose()
                      setTimeout(() => {
                        const event = new CustomEvent('navigateToPlanet', { detail: p.id })
                        window.dispatchEvent(event)
                      }, 100)
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all group"
                  >
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{
                        background: p.gradient,
                        boxShadow: `0 0 8px ${p.glowColor}`,
                      }}
                    />
                    <span className="text-mono text-xs text-stone-400 group-hover:text-white transition-colors">
                      {p.name}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
