export interface Planet {
  id: string
  name: string
  symbol: string
  category: string
  description: string
  orbitRadius: number
  orbitSpeed: number // seconds per revolution (slower = higher number)
  size: number
  order: number
  // Realistic planet appearance
  gradient: string
  glowColor: string
  hasRings?: boolean
  ringColor?: string
}

export const planets: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    symbol: '☿',
    category: 'KNOWLEDGE',
    description: 'Learning, tools, thinking, communication',
    orbitRadius: 85,
    orbitSpeed: 25, // Slower
    size: 18,
    order: 1,
    gradient: 'radial-gradient(circle at 30% 30%, #A0A0A0, #6B6B6B, #3D3D3D)',
    glowColor: 'rgba(160, 160, 160, 0.3)',
  },
  {
    id: 'venus',
    name: 'Venus',
    symbol: '♀',
    category: 'HEALTH',
    description: 'Body, mind, relationships, balance',
    orbitRadius: 120,
    orbitSpeed: 35,
    size: 28,
    order: 2,
    gradient: 'radial-gradient(circle at 30% 30%, #FFF8E7, #E8C87A, #C4A055)',
    glowColor: 'rgba(232, 200, 122, 0.4)',
  },
  {
    id: 'earth',
    name: 'Earth',
    symbol: '🌍',
    category: 'LIFE',
    description: 'Habits, community, daily living',
    orbitRadius: 160,
    orbitSpeed: 45,
    size: 30,
    order: 3,
    gradient: 'radial-gradient(circle at 30% 30%, #87CEEB, #4A90C2, #2E5A7E), radial-gradient(circle at 60% 50%, #3CB371 0%, transparent 30%), radial-gradient(circle at 40% 70%, #228B22 0%, transparent 25%)',
    glowColor: 'rgba(74, 144, 194, 0.4)',
  },
  {
    id: 'mars',
    name: 'Mars',
    symbol: '♂',
    category: 'ACTION',
    description: 'Tasks, energy, discipline',
    orbitRadius: 205,
    orbitSpeed: 55,
    size: 24,
    order: 4,
    gradient: 'radial-gradient(circle at 30% 30%, #E07850, #C1440E, #8B2500)',
    glowColor: 'rgba(193, 68, 14, 0.4)',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    symbol: '♃',
    category: 'WEALTH',
    description: 'Finance, growth, opportunity',
    orbitRadius: 265,
    orbitSpeed: 70,
    size: 52,
    order: 5,
    gradient: 'radial-gradient(circle at 30% 30%, #F5DEB3, #D4A574, #A67B4C), repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(139,90,43,0.3) 8px, rgba(139,90,43,0.3) 12px)',
    glowColor: 'rgba(212, 165, 116, 0.4)',
  },
  {
    id: 'saturn',
    name: 'Saturn',
    symbol: '♄',
    category: 'STRUCTURE',
    description: 'Time, planning, responsibility',
    orbitRadius: 330,
    orbitSpeed: 85,
    size: 46,
    order: 6,
    gradient: 'radial-gradient(circle at 30% 30%, #FDF5E6, #E8D4A8, #C4A868)',
    glowColor: 'rgba(232, 212, 168, 0.4)',
    hasRings: true,
    ringColor: 'rgba(210, 180, 140, 0.6)',
  },
  {
    id: 'uranus',
    name: 'Uranus',
    symbol: '♅',
    category: 'INNOVATION',
    description: 'New ideas, future thinking',
    orbitRadius: 385,
    orbitSpeed: 100,
    size: 38,
    order: 7,
    gradient: 'radial-gradient(circle at 30% 30%, #E0FFFF, #7BC8E8, #4AA8C4)',
    glowColor: 'rgba(123, 200, 232, 0.4)',
  },
  {
    id: 'neptune',
    name: 'Neptune',
    symbol: '♆',
    category: 'WISDOM',
    description: 'Literature, meaning, spirituality',
    orbitRadius: 435,
    orbitSpeed: 115,
    size: 36,
    order: 8,
    gradient: 'radial-gradient(circle at 30% 30%, #6495ED, #4169E1, #2E4A8E)',
    glowColor: 'rgba(65, 105, 225, 0.4)',
  },
  {
    id: 'pluto',
    name: 'Pluto',
    symbol: '♇',
    category: 'CHANGE',
    description: 'Transformation, healing, truth',
    orbitRadius: 475,
    orbitSpeed: 130,
    size: 14,
    order: 9,
    gradient: 'radial-gradient(circle at 30% 30%, #D2B48C, #9B7B6E, #6B5344)',
    glowColor: 'rgba(155, 123, 110, 0.3)',
  }
]

export const sun = {
  id: 'sun',
  name: 'Sun',
  symbol: '☀️',
  category: 'PURPOSE',
  description: 'Home, identity, direction',
  size: 70,
  gradient: 'radial-gradient(circle at 30% 30%, #FFF8DC, #FFD700, #FFA500, #FF6600)',
  glowColor: 'rgba(255, 165, 0, 0.6)',
}
