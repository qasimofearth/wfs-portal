'use client'

import { useState, useEffect } from 'react'
import { planets, sun } from '@/data/planets'
import { getAppsByPlanet } from '@/data/apps'
import PlanetDashboard from './PlanetDashboard'

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
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

  return (
    <section id="apps" className="relative min-h-screen bg-black overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0">
        <div className="stars-bg opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-24 pb-8">
        <h2 className="heading-display text-4xl md:text-5xl mb-4">
          The Observatory
        </h2>
        <p className="text-body text-lg text-stone-400 max-w-xl mx-auto px-4">
          Navigate the cosmos of human potential. Each world holds tools for transformation.
        </p>
      </div>

      {/* Solar System Container */}
      <div className="relative w-full h-[800px] md:h-[900px] flex items-center justify-center overflow-hidden">
        {/* Orbit Rings */}
        {planets.map((planet) => (
          <div
            key={`orbit-${planet.id}`}
            className="absolute rounded-full border border-white/5 pointer-events-none"
            style={{
              width: planet.orbitRadius * 2,
              height: planet.orbitRadius * 2,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%) rotateX(75deg)',
              transformStyle: 'preserve-3d',
            }}
          />
        ))}

        {/* The Sun */}
        <div
          className="absolute z-20 cursor-pointer group"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          onClick={() => setSelectedPlanet('sun')}
          onMouseEnter={() => setHoveredPlanet('sun')}
          onMouseLeave={() => setHoveredPlanet(null)}
        >
          <div
            className="relative rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{
              width: sun.size,
              height: sun.size,
              background: `radial-gradient(circle at 30% 30%, #FFF7E0, ${sun.color}, #E67E00)`,
              boxShadow: `
                0 0 60px ${sun.glowColor},
                0 0 120px ${sun.glowColor},
                0 0 180px rgba(253, 184, 19, 0.3),
                inset -10px -10px 30px rgba(0,0,0,0.3)
              `,
            }}
          >
            {/* Sun corona animation */}
            <div
              className="absolute inset-0 rounded-full animate-pulse-slow"
              style={{
                background: `radial-gradient(circle, transparent 50%, ${sun.glowColor} 100%)`,
                transform: 'scale(1.3)',
                opacity: 0.5,
              }}
            />
            {/* WFS text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-stone-900 font-bold text-xs text-mono tracking-wider">WFS</span>
            </div>
          </div>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-mono text-xs text-primary-gold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            PURPOSE
          </span>
        </div>

        {/* Planets */}
        {planets.map((planet) => {
          const apps = getAppsByPlanet(planet.id)
          const liveApps = apps.filter(a => a.status === 'live').length
          const isHovered = hoveredPlanet === planet.id

          return (
            <div
              key={planet.id}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                width: 0,
                height: 0,
                animation: isLoaded ? `orbit-3d ${planet.orbitSpeed}s linear infinite` : 'none',
                animationDelay: `-${planet.order * 3}s`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="absolute cursor-pointer group transition-all duration-300"
                style={{
                  left: planet.orbitRadius,
                  top: 0,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => handlePlanetClick(planet.id)}
                onMouseEnter={() => setHoveredPlanet(planet.id)}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                {/* Planet body */}
                <div
                  className={`relative rounded-full transition-all duration-300 ${
                    isHovered ? 'scale-150 z-50' : 'z-10'
                  }`}
                  style={{
                    width: planet.size,
                    height: planet.size,
                    background: `radial-gradient(circle at 30% 30%,
                      ${planet.color}ff,
                      ${planet.color}dd,
                      ${planet.color}88
                    )`,
                    boxShadow: isHovered
                      ? `0 0 40px ${planet.glowColor}, 0 0 80px ${planet.glowColor}, inset -5px -5px 20px rgba(0,0,0,0.5)`
                      : `0 0 20px ${planet.glowColor}, inset -5px -5px 15px rgba(0,0,0,0.4)`,
                  }}
                >
                  {/* Planet icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/80" style={{ fontSize: planet.size * 0.4 }}>
                      {planet.symbol}
                    </span>
                  </div>

                  {/* Saturn's rings */}
                  {planet.id === 'saturn' && (
                    <div
                      className="absolute top-1/2 left-1/2 pointer-events-none"
                      style={{
                        width: planet.size * 1.8,
                        height: planet.size * 0.5,
                        border: '3px solid rgba(232, 212, 168, 0.4)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%) rotateX(70deg)',
                      }}
                    />
                  )}

                  {/* Live apps indicator */}
                  {liveApps > 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-black flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">{liveApps}</span>
                    </div>
                  )}
                </div>

                {/* Planet name label */}
                <span
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-mono text-[10px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ color: planet.color }}
                >
                  {planet.category}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Hover Info Panel */}
      {hoveredData && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 animate-slide-up pointer-events-none">
          <div className="card-glass px-8 py-5 text-center backdrop-blur-xl border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl">{hoveredData.symbol}</span>
              <h3 className="heading-display text-2xl" style={{ color: hoveredData.color }}>
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
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 animate-slide-up pointer-events-none">
          <div className="card-glass px-8 py-5 text-center backdrop-blur-xl border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl">{sun.symbol}</span>
              <h3 className="heading-display text-2xl" style={{ color: sun.color }}>
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

      {/* Sun Dashboard (Purpose/Home) */}
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
                  background: `radial-gradient(circle at 30% 30%, #FFF7E0, ${sun.color}, #E67E00)`,
                  boxShadow: `0 0 80px ${sun.glowColor}, 0 0 160px ${sun.glowColor}`,
                }}
              />
              <h2 className="heading-display text-5xl mb-4" style={{ color: sun.color }}>
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
              <p className="text-mono text-sm text-stone-500 mt-8">
                Return to the Observatory to explore other worlds
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="relative z-10 text-center pb-16 pt-8">
        <p className="text-mono text-xs text-stone-600 tracking-wider">
          HOVER TO DISCOVER · CLICK TO EXPLORE
        </p>
      </div>
    </section>
  )
}
