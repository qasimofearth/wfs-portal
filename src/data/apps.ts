export interface App {
  id: string
  name: string
  description: string
  icon: string
  category: string
  tags: string[]
  status: 'live' | 'beta' | 'coming-soon'
  url?: string
  featured?: boolean
}

export const apps: App[] = [
  {
    id: 'cellular-reset',
    name: 'Cellular Reset',
    description: 'Optimize your biology at the cellular level. Science-backed protocols for regeneration, longevity, and peak performance.',
    icon: '⚡',
    category: 'healing',
    tags: ['Longevity', 'Biohacking'],
    status: 'live',
    url: 'https://cell-reset.vercel.app',
    featured: true,
  },
  {
    id: 'stoic-oracle',
    name: 'Stoic Oracle',
    description: 'Daily wisdom from Marcus Aurelius, Seneca, and Epictetus. Ancient philosophy decoded for modern challenges.',
    icon: '🏛️',
    category: 'ancient-wisdom',
    tags: ['Stoicism', 'Daily Practice'],
    status: 'coming-soon',
  },
  {
    id: 'neural-nexus',
    name: 'Neural Nexus',
    description: 'Map your thoughts in 3D space. Discover hidden connections between ideas. Visual thinking for expanded minds.',
    icon: '🧠',
    category: 'mind',
    tags: ['Cognition', 'Visualization'],
    status: 'coming-soon',
  },
  {
    id: 'wealth-codex',
    name: 'Wealth Codex',
    description: 'Financial wisdom from ancient merchants to modern masters. Algorithms for abundance and prosperity.',
    icon: '💎',
    category: 'finances',
    tags: ['Wealth', 'Strategy'],
    status: 'coming-soon',
  },
  {
    id: 'void-meditation',
    name: 'Void Chamber',
    description: 'Enter the void. Minimalist meditation with binaural frequencies and consciousness expansion protocols.',
    icon: '🕳️',
    category: 'spirituality',
    tags: ['Meditation', 'Altered States'],
    status: 'coming-soon',
  },
  {
    id: 'quantum-journal',
    name: 'Quantum Journal',
    description: 'Reality manifesting through structured intention. Track synchronicities and collapse probability waves.',
    icon: '📡',
    category: 'mind',
    tags: ['Manifestation', 'Tracking'],
    status: 'coming-soon',
  },
]
