export interface Planet {
  id: string
  name: string
  symbol: string
  category: string
  description: string
  color: string
  glowColor: string
  orbitRadius: number // in pixels from center
  orbitSpeed: number // seconds per revolution
  size: number // planet size in pixels
  order: number // orbital order from sun
}

export const planets: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    symbol: '☿',
    category: 'KNOWLEDGE',
    description: 'Learning, tools, thinking, communication',
    color: '#B5B5B5',
    glowColor: 'rgba(181, 181, 181, 0.4)',
    orbitRadius: 80,
    orbitSpeed: 8,
    size: 20,
    order: 1
  },
  {
    id: 'venus',
    name: 'Venus',
    symbol: '♀',
    category: 'HEALTH',
    description: 'Body, mind, relationships, balance',
    color: '#E6C87A',
    glowColor: 'rgba(230, 200, 122, 0.4)',
    orbitRadius: 120,
    orbitSpeed: 12,
    size: 28,
    order: 2
  },
  {
    id: 'earth',
    name: 'Earth',
    symbol: '🌍',
    category: 'LIFE',
    description: 'Habits, community, daily living',
    color: '#6B93D6',
    glowColor: 'rgba(107, 147, 214, 0.4)',
    orbitRadius: 160,
    orbitSpeed: 16,
    size: 30,
    order: 3
  },
  {
    id: 'mars',
    name: 'Mars',
    symbol: '♂',
    category: 'ACTION',
    description: 'Tasks, energy, discipline',
    color: '#C1440E',
    glowColor: 'rgba(193, 68, 14, 0.4)',
    orbitRadius: 200,
    orbitSpeed: 20,
    size: 24,
    order: 4
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    symbol: '♃',
    category: 'WEALTH',
    description: 'Finance, growth, opportunity',
    color: '#D4A574',
    glowColor: 'rgba(212, 165, 116, 0.4)',
    orbitRadius: 260,
    orbitSpeed: 28,
    size: 50,
    order: 5
  },
  {
    id: 'saturn',
    name: 'Saturn',
    symbol: '♄',
    category: 'STRUCTURE',
    description: 'Time, planning, responsibility',
    color: '#E8D4A8',
    glowColor: 'rgba(232, 212, 168, 0.4)',
    orbitRadius: 320,
    orbitSpeed: 36,
    size: 44,
    order: 6
  },
  {
    id: 'uranus',
    name: 'Uranus',
    symbol: '♅',
    category: 'INNOVATION',
    description: 'New ideas, future thinking',
    color: '#7BC8E8',
    glowColor: 'rgba(123, 200, 232, 0.4)',
    orbitRadius: 370,
    orbitSpeed: 44,
    size: 36,
    order: 7
  },
  {
    id: 'neptune',
    name: 'Neptune',
    symbol: '♆',
    category: 'WISDOM',
    description: 'Literature, meaning, spirituality',
    color: '#5B7FD4',
    glowColor: 'rgba(91, 127, 212, 0.4)',
    orbitRadius: 420,
    orbitSpeed: 52,
    size: 34,
    order: 8
  },
  {
    id: 'pluto',
    name: 'Pluto',
    symbol: '♇',
    category: 'CHANGE',
    description: 'Transformation, healing, truth',
    color: '#9B7B8E',
    glowColor: 'rgba(155, 123, 142, 0.4)',
    orbitRadius: 460,
    orbitSpeed: 60,
    size: 16,
    order: 9
  }
]

export const sun = {
  id: 'sun',
  name: 'Sun',
  symbol: '☀️',
  category: 'PURPOSE',
  description: 'Home, identity, direction',
  color: '#FDB813',
  glowColor: 'rgba(253, 184, 19, 0.6)',
  size: 80
}
