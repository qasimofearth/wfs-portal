'use client'

import { useState } from 'react'
import { planets, sun } from '@/data/planets'
import { getAppsByPlanet } from '@/data/apps'
import PlanetDashboard from './PlanetDashboard'

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)

  const handlePlanetClick = (planetId: string) => {
    setSelectedPlanet(planetId)
  }

  const handleClose = () => {
    setSelectedPlanet(null)
  }

  const hoveredData = hoveredPlanet
    ? planets.find(p => p.id === hoveredPlanet)
    : null

  return (
    <section id="apps" className="relative min-h-screen bg-black overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0">
        <div className="stars-bg opacity-60"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-20 pb-4">
        <h2 className="heading-display text-4xl md:text-5xl mb-4">
          The Observatory
        </h2>
        <p className="text-body text-lg text-stone-400 max-w-xl mx-auto px-4">
          Navigate the cosmos of human potential. Each world holds tools for transformation.
        </p>
      </div>

      {/* Solar System Container */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: '750px' }}
      >
        {/* 3D tilted plane for orbits */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative"
            style={{
              width: '1000px',
              height: '1000px',
              transformStyle: 'preserve-3d',
              transform: 'rotateX(60deg)',
            }}
          >
            {/* Orbit Rings */}
            {planets.map((planet) => (
              <div
                key={`orbit-${planet.id}`}
                className="absolute rounded-full border border-white/[0.08]"
                style={{
                  width: planet.orbitRadius * 2,
                  height: planet.orbitRadius * 2,
                  left: '50%',
                  top: '50%',
                  marginLeft: -planet.orbitRadius,
                  marginTop: -planet.orbitRadius,
                }}
              />
            ))}

            {/* Orbiting Planets */}
            {planets.map((planet) => {
              const apps = getAppsByPlanet(planet.id)
              const liveApps = apps.filter(a => a.status === 'live').length
              const isHovered = hoveredPlanet === planet.id
              // Larger click area
              const clickAreaSize = Math.max(planet.size + 30, 50)

              return (
                <div
                  key={planet.id}
                  className="absolute rounded-full"
                  style={{
                    width: planet.orbitRadius * 2,
                    height: planet.orbitRadius * 2,
                    left: '50%',
                    top: '50%',
                    marginLeft: -planet.orbitRadius,
                    marginTop: -planet.orbitRadius,
                    animation: `spin ${planet.orbitSpeed}s linear infinite`,
                    animationDelay: `-${planet.order * 8}s`,
                  }}
                >
                  {/* Click area - larger invisible target */}
                  <div
                    className="absolute cursor-pointer"
                    style={{
                      right: -clickAreaSize / 2,
                      top: '50%',
                      marginTop: -clickAreaSize / 2,
                      width: clickAreaSize,
                      height: clickAreaSize,
                      // Counter-rotate to face viewer
                      animation: `counter-spin-tilt ${planet.orbitSpeed}s linear infinite`,
                      animationDelay: `-${planet.order * 8}s`,
                    }}
                    onClick={() => handlePlanetClick(planet.id)}
                    onMouseEnter={() => setHoveredPlanet(planet.id)}
                    onMouseLeave={() => setHoveredPlanet(null)}
                  >
                    {/* Planet sphere - centered in click area */}
                    <div
                      className="absolute left-1/2 top-1/2 rounded-full transition-transform duration-300"
                      style={{
                        width: planet.size,
                        height: planet.size,
                        marginLeft: -planet.size / 2,
                        marginTop: -planet.size / 2,
                        background: planet.gradient,
                        boxShadow: isHovered
                          ? `0 0 ${planet.size}px ${planet.glowColor}, 0 0 ${planet.size * 2}px ${planet.glowColor}, inset -${planet.size * 0.15}px -${planet.size * 0.1}px ${planet.size * 0.3}px rgba(0,0,0,0.5)`
                          : `0 0 ${planet.size * 0.5}px ${planet.glowColor}, inset -${planet.size * 0.15}px -${planet.size * 0.1}px ${planet.size * 0.3}px rgba(0,0,0,0.4)`,
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      }}
                    >
                      {/* Saturn rings */}
                      {planet.hasRings && (
                        <>
                          <div
                            className="absolute pointer-events-none"
                            style={{
                              width: planet.size * 2,
                              height: planet.size * 0.5,
                              left: '50%',
                              top: '50%',
                              marginLeft: -planet.size,
                              marginTop: -planet.size * 0.25,
                              border: `3px solid ${planet.ringColor}`,
                              borderRadius: '50%',
                              transform: 'rotateX(75deg)',
                            }}
                          />
                          <div
                            className="absolute pointer-events-none"
                            style={{
                              width: planet.size * 1.6,
                              height: planet.size * 0.4,
                              left: '50%',
                              top: '50%',
                              marginLeft: -planet.size * 0.8,
                              marginTop: -planet.size * 0.2,
                              border: `2px solid ${planet.ringColor?.replace('0.6', '0.4')}`,
                              borderRadius: '50%',
                              transform: 'rotateX(75deg)',
                            }}
                          />
                        </>
                      )}

                      {/* Live indicator */}
                      {liveApps > 0 && (
                        <div
                          className="absolute bg-green-500 rounded-full animate-pulse border-2 border-black flex items-center justify-center"
                          style={{
                            width: 16,
                            height: 16,
                            top: -4,
                            right: -4,
                          }}
                        >
                          <span className="text-[8px] text-white font-bold">{liveApps}</span>
                        </div>
                      )}
                    </div>

                    {/* Hover label */}
                    {isHovered && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-50"
                        style={{ top: clickAreaSize / 2 + planet.size / 2 + 12 }}
                      >
                        <span className="text-mono text-[10px] uppercase tracking-wider px-3 py-1 bg-black/90 rounded-full border border-white/10 text-white">
                          {planet.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* The Sun (centered, not tilted) */}
        <div
          className="absolute z-30 cursor-pointer group"
          onClick={() => setSelectedPlanet('sun')}
          onMouseEnter={() => setHoveredPlanet('sun')}
          onMouseLeave={() => setHoveredPlanet(null)}
        >
          <div
            className="relative rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{
              width: sun.size,
              height: sun.size,
              background: sun.gradient,
              boxShadow: `
                0 0 40px ${sun.glowColor},
                0 0 80px ${sun.glowColor},
                0 0 120px rgba(255, 165, 0, 0.3)
              `,
            }}
          >
            {/* Corona pulse */}
            <div
              className="absolute inset-0 rounded-full animate-pulse-slow"
              style={{
                background: `radial-gradient(circle, transparent 40%, ${sun.glowColor} 100%)`,
                transform: 'scale(1.5)',
                opacity: 0.4,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-stone-900/80 font-bold text-xs text-mono tracking-wider">WFS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Info Panel */}
      {hoveredData && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-fade-in">
          <div className="card-glass px-8 py-5 text-center backdrop-blur-xl border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div
                className="rounded-full"
                style={{
                  width: 24,
                  height: 24,
                  background: hoveredData.gradient,
                  boxShadow: `0 0 10px ${hoveredData.glowColor}`,
                }}
              />
              <h3 className="heading-display text-2xl text-white">
                {hoveredData.name}
              </h3>
            </div>
            <p className="text-mono text-xs text-primary-gold uppercase tracking-wider mb-1">
              {hoveredData.category}
            </p>
            <p className="text-body text-sm text-stone-400">
              {hoveredData.description}
            </p>
            <p className="text-mono text-xs text-stone-500 mt-3">
              Click to explore {getAppsByPlanet(hoveredData.id).length} apps
            </p>
          </div>
        </div>
      )}

      {/* Sun Hover Info */}
      {hoveredPlanet === 'sun' && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-fade-in">
          <div className="card-glass px-8 py-5 text-center backdrop-blur-xl border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div
                className="rounded-full"
                style={{
                  width: 24,
                  height: 24,
                  background: sun.gradient,
                  boxShadow: `0 0 10px ${sun.glowColor}`,
                }}
              />
              <h3 className="heading-display text-2xl text-white">
                {sun.name}
              </h3>
            </div>
            <p className="text-mono text-xs text-primary-gold uppercase tracking-wider mb-1">
              {sun.category}
            </p>
            <p className="text-body text-sm text-stone-400">
              {sun.description}
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
            className="fixed top-6 right-6 z-50 text-stone-400 hover:text-white transition-colors p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="text-center max-w-2xl">
              <div
                className="w-32 h-32 mx-auto mb-8 rounded-full animate-pulse-slow"
                style={{
                  background: sun.gradient,
                  boxShadow: `0 0 60px ${sun.glowColor}, 0 0 120px ${sun.glowColor}`,
                }}
              />
              <h2 className="heading-display text-5xl mb-4 text-orange-400">
                Purpose
              </h2>
              <p className="text-body text-xl text-stone-300 mb-8">
                Home, identity, direction
              </p>
              <div className="card-glass p-8">
                <p className="text-body text-lg text-stone-400 leading-relaxed">
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
      <div className="relative z-10 text-center pb-12">
        <p className="text-mono text-xs text-stone-600 tracking-wider">
          HOVER TO DISCOVER · CLICK TO EXPLORE
        </p>
      </div>
    </section>
  )
}
