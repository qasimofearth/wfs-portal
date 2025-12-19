'use client'

import { useState } from 'react'
import { apps } from '@/data/apps'

export default function SolarSystem() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)

  const activeApp = apps.find(app => app.id === (hoveredApp || selectedApp))

  return (
    <section id="apps" className="py-32 bg-stone-950 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-50"></div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-gold/5 rounded-full blur-[150px]"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-display text-5xl md:text-6xl mb-6">
            The Observatory
          </h2>
          <div className="divider mb-6"></div>
          <p className="text-body text-lg max-w-xl mx-auto">
            Each app orbits the center of wisdom. Click to explore.
          </p>
        </div>

        {/* Solar System Container */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Center - The Sun/Earth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-gold to-yellow-600 glow-gold animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-stone-950 font-bold text-xs text-mono tracking-wider">WFS</span>
              </div>
            </div>
          </div>

          {/* Orbit Paths */}
          {apps.map((app, index) => {
            const size = 80 + (app.orbitRadius * 100)
            return (
              <div
                key={`orbit-${app.id}`}
                className="orbit-path"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            )
          })}

          {/* Planets (Apps) */}
          {apps.map((app, index) => {
            const orbitSize = 80 + (app.orbitRadius * 100)
            const isActive = hoveredApp === app.id || selectedApp === app.id

            return (
              <div
                key={app.id}
                className="absolute top-1/2 left-1/2 z-10"
                style={{
                  width: `${orbitSize}px`,
                  height: `${orbitSize}px`,
                  marginLeft: `-${orbitSize / 2}px`,
                  marginTop: `-${orbitSize / 2}px`,
                }}
              >
                <div
                  className="planet cursor-pointer group"
                  style={{
                    '--orbit-radius': `${orbitSize / 2}px`,
                    '--orbit-speed': `${app.orbitSpeed}s`,
                  } as React.CSSProperties}
                  onMouseEnter={() => setHoveredApp(app.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                  onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'scale-150' : 'group-hover:scale-125'
                    }`}
                    style={{
                      backgroundColor: app.color,
                      boxShadow: isActive
                        ? `0 0 30px ${app.color}, 0 0 60px ${app.color}50`
                        : `0 0 20px ${app.color}50`,
                    }}
                  >
                    {app.status === 'live' && (
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    )}
                  </div>

                  {/* App name tooltip */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap transition-all duration-300 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <span className="text-mono text-xs text-white bg-stone-900/90 px-3 py-1 rounded-full border border-white/10">
                      {app.name}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected App Details */}
        <div className={`mt-8 transition-all duration-500 ${activeApp ? 'opacity-100' : 'opacity-0'}`}>
          {activeApp && (
            <div className="max-w-lg mx-auto text-center card-glass p-8">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6"
                style={{
                  backgroundColor: activeApp.color,
                  boxShadow: `0 0 40px ${activeApp.color}50`,
                }}
              />
              <h3 className="heading-display text-3xl mb-2">{activeApp.name}</h3>
              <p className="text-mono text-xs text-primary-gold mb-4 uppercase tracking-wider">
                {activeApp.category}
              </p>
              <p className="text-body mb-6">{activeApp.description}</p>

              <div className="flex items-center justify-center gap-4">
                <span className={`text-mono text-xs uppercase tracking-wider ${
                  activeApp.status === 'live' ? 'text-green-400' : 'text-stone-500'
                }`}>
                  ● {activeApp.status === 'live' ? 'Live' : 'Coming Soon'}
                </span>

                {activeApp.url && (
                  <a
                    href={activeApp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-6"
                  >
                    Launch →
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedApp === app.id
                  ? 'bg-white/10 border border-white/20'
                  : 'hover:bg-white/5'
              }`}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: app.color }}
              />
              <span className="text-mono text-xs text-stone-400">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
