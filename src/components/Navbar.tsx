'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#apps', label: 'Apps' },
    { href: '#about', label: 'About' },
    { href: '#team', label: 'Team' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-void-950/90 backdrop-blur-xl border-b border-neon-blue/10 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <Image
              src="/logo.svg"
              alt="WFS Logo"
              width={50}
              height={50}
              className="group-hover:scale-105 transition-transform"
            />
            <span
              className="font-bold text-xl text-neon-blue glow-text tracking-wider hidden sm:block"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              WFS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-void-300 hover:text-neon-blue font-medium transition-all duration-300 relative group uppercase tracking-wider text-sm"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-neon-blue shadow-neon group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl border border-neon-blue/30 hover:bg-neon-blue/10 text-neon-blue transition-all"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-neon-blue/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-void-300 hover:text-neon-blue font-medium transition-colors uppercase tracking-wider"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
