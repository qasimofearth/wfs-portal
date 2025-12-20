'use client'

import { useState, useEffect } from 'react'
import { planets, sun } from '@/data/planets'
import { getAppsByPlanet } from '@/data/apps'
import PlanetDashboard from './PlanetDashboard'

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)
  const [time, setTime] = useState(0)

  // Animate planets
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.5)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const handlePlanetClick = (planetId: string) => {
    setSelectedPlanet(planetId)
  }

  const handleClose = () => {
    setSelectedPlanet(null)
  }

  const hoveredData = hoveredPlanet
    ? planets.find(p => p.id === hoveredPlanet)
    : null

  // Calculate planet position on elliptical orbit
  const getPlanetPosition = (planet: typeof planets[0]) => {
    const angle = (time / planet.orbitSpeed) * Math.PI * 2 + (planet.order * 0.7)
    const x = Math.cos(angle) * planet.orbitRadius
    const y = Math.sin(angle) * planet.orbitRadius * 0.4 // Ellipse for 3D effect
    return { x, y, angle }
  }

  return (
    <section id="apps" className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated space background */}
      <div className="absolute inset-0">
        <div className="stars-bg opacity-70"></div>
        <div className="stars-bg-2 opacity-50"></div>
        {/* Nebula effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(88, 28, 135, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-16 pb-8">
        <h2 className="heading-display text-5xl md:text-7xl mb-4 text-white">
          The Observatory
        </h2>
        <p className="text-body text-xl text-stone-300 max-w-2xl mx-auto px-4">
          Navigate the cosmos of human potential. Click any world to explore its apps.
        </p>
      </div>

      {/* Solar System */}
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          maxWidth: '1400px',
          height: '800px',
        }}
      >
        {/* Orbit paths */}
        {planets.map((planet) => (
          <div
            key={`orbit-${planet.id}`}
            className="absolute left-1/2 top-1/2 border border-white/10 rounded-full pointer-events-none"
            style={{
              width: planet.orbitRadius * 2,
              height: planet.orbitRadius * 2 * 0.4,
              marginLeft: -planet.orbitRadius,
              marginTop: -planet.orbitRadius * 0.4,
            }}
          />
        ))}

        {/* THE SUN */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group"
          onClick={() => handlePlanetClick('sun')}
          onMouseEnter={() => setHoveredPlanet('sun')}
          onMouseLeave={() => setHoveredPlanet(null)}
        >
          {/* Outer glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
            style={{
              width: 200,
              height: 200,
              background: 'radial-gradient(circle, rgba(255,165,0,0.3) 0%, transparent 70%)',
            }}
          />
          {/* Sun body */}
          <div
            className="relative rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{
              width: 100,
              height: 100,
              background: sun.gradient,
              boxShadow: `
                0 0 60px rgba(255,165,0,0.8),
                0 0 120px rgba(255,165,0,0.4),
                inset -15px -15px 30px rgba(0,0,0,0.3)
              `,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-stone-900 font-bold text-lg text-mono tracking-wider">WFS</span>
            </div>
          </div>
        </div>

        {/* PLANETS */}
        {planets.map((planet) => {
          const pos = getPlanetPosition(planet)
          const apps = getAppsByPlanet(planet.id)
          const liveApps = apps.filter(a => a.status === 'live').length
          const isHovered = hoveredPlanet === planet.id

          // Bigger sizes for visibility
          const displaySize = planet.size * 1.8
          const clickSize = Math.max(displaySize + 40, 80)

          // Z-index based on Y position (planets in front appear on top)
          const zIndex = Math.round(pos.y + 500)

          return (
            <div
              key={planet.id}
              className="absolute cursor-pointer transition-transform duration-150"
              style={{
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: isHovered ? 100 : zIndex,
              }}
              onClick={() => handlePlanetClick(planet.id)}
              onMouseEnter={() => setHoveredPlanet(planet.id)}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              {/* Large invisible click target */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: clickSize,
                  height: clickSize,
                }}
              />

              {/* Hover glow ring */}
              {isHovered && (
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping"
                  style={{
                    width: displaySize + 30,
                    height: displaySize + 30,
                    border: `2px solid ${planet.glowColor}`,
                  }}
                />
              )}

              {/* Planet glow */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300"
                style={{
                  width: displaySize + 20,
                  height: displaySize + 20,
                  background: `radial-gradient(circle, ${planet.glowColor} 0%, transparent 70%)`,
                  opacity: isHovered ? 1 : 0.5,
                }}
              />

              {/* Planet body */}
              <div
                className="relative rounded-full transition-all duration-300"
                style={{
                  width: displaySize,
                  height: displaySize,
                  background: planet.gradient,
                  boxShadow: isHovered
                    ? `0 0 ${displaySize}px ${planet.glowColor}, inset -${displaySize * 0.15}px -${displaySize * 0.1}px ${displaySize * 0.3}px rgba(0,0,0,0.5)`
                    : `0 0 ${displaySize * 0.3}px ${planet.glowColor}, inset -${displaySize * 0.15}px -${displaySize * 0.1}px ${displaySize * 0.3}px rgba(0,0,0,0.4)`,
                  transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                }}
              >
                {/* Saturn rings */}
                {planet.hasRings && (
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      width: displaySize * 2.2,
                      height: displaySize * 0.6,
                      borderRadius: '50%',
                      border: `4px solid ${planet.ringColor}`,
                      transform: 'rotateX(75deg)',
                    }}
                  />
                )}

                {/* Live apps badge */}
                {liveApps > 0 && (
                  <div
                    className="absolute bg-green-500 rounded-full animate-pulse border-2 border-black flex items-center justify-center font-bold text-white"
                    style={{
                      width: 24,
                      height: 24,
                      top: -8,
                      right: -8,
                      fontSize: 11,
                    }}
                  >
                    {liveApps}
                  </div>
                )}
              </div>

              {/* Planet name label */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
                style={{ top: displaySize / 2 + 20 }}
              >
                <div className="bg-black/90 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <span className="text-mono text-sm text-white font-medium">
                    {planet.name}
                  </span>
                  <span className="text-mono text-xs text-primary-gold ml-2">
                    {planet.category}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Hover Info Panel */}
      {hoveredData && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl px-10 py-6 text-center shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div
                className="rounded-full"
                style={{
                  width: 40,
                  height: 40,
                  background: hoveredData.gradient,
                  boxShadow: `0 0 20px ${hoveredData.glowColor}`,
                }}
              />
              <h3 className="heading-display text-3xl text-white">
                {hoveredData.name}
              </h3>
            </div>
            <p className="text-mono text-sm text-primary-gold uppercase tracking-widest mb-2">
              {hoveredData.category}
            </p>
            <p className="text-body text-base text-stone-300 mb-3">
              {hoveredData.description}
            </p>
            <p className="text-mono text-sm text-green-400">
              Click to explore {getAppsByPlanet(hoveredData.id).length} apps
            </p>
          </div>
        </div>
      )}

      {/* Sun Hover */}
      {hoveredPlanet === 'sun' && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl px-10 py-6 text-center shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div
                className="rounded-full"
                style={{
                  width: 40,
                  height: 40,
                  background: sun.gradient,
                  boxShadow: `0 0 20px ${sun.glowColor}`,
                }}
              />
              <h3 className="heading-display text-3xl text-white">
                The Sun
              </h3>
            </div>
            <p className="text-mono text-sm text-primary-gold uppercase tracking-widest mb-2">
              PURPOSE
            </p>
            <p className="text-body text-base text-stone-300">
              Home, identity, direction
            </p>
          </div>
        </div>
      )}

      {/* Planet Dashboard Modal */}
      {selectedPlanet && selectedPlanet !== 'sun' && (
        <PlanetDashboard
          planetId={selectedPlanet}
          onClose={handleClose}
        />
      )}

      {/* Sun Dashboard */}
      {selectedPlanet === 'sun' && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-auto">
          <button
            onClick={handleClose}
            className="fixed top-8 right-8 z-50 text-stone-400 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="text-center max-w-2xl">
              <div
                className="w-40 h-40 mx-auto mb-10 rounded-full"
                style={{
                  background: sun.gradient,
                  boxShadow: `0 0 80px ${sun.glowColor}, 0 0 160px ${sun.glowColor}`,
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              />
              <h2 className="heading-display text-6xl mb-6 text-orange-400">
                Purpose
              </h2>
              <p className="text-body text-2xl text-stone-300 mb-10">
                Home, identity, direction
              </p>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10">
                <p className="text-body text-xl text-stone-400 leading-relaxed">
                  You are the center of your universe. Every journey through these worlds
                  begins and ends here. The Sun represents your core purpose—the driving
                  force that illuminates all paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="relative z-10 text-center py-8">
        <p className="text-mono text-sm text-stone-500 tracking-wider">
          CLICK ANY PLANET TO EXPLORE
        </p>
      </div>
    </section>
  )
}
