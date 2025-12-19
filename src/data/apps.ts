export interface App {
  id: string
  name: string
  description: string
  category: string
  status: 'live' | 'coming-soon'
  url?: string
  orbitRadius: number // for solar system visualization
  orbitSpeed: number // seconds per revolution
  color: string
}

export const apps: App[] = [
  {
    id: 'cellular-reset',
    name: 'Cellular Reset',
    description: 'Science-backed protocols for cellular regeneration and longevity.',
    category: 'Healing',
    status: 'live',
    url: 'https://cell-reset.vercel.app',
    orbitRadius: 1,
    orbitSpeed: 20,
    color: '#22c55e',
  },
  {
    id: 'stoic-oracle',
    name: 'Stoic Oracle',
    description: 'Daily wisdom from Marcus Aurelius, Seneca, and Epictetus.',
    category: 'Ancient Wisdom',
    status: 'coming-soon',
    orbitRadius: 1.6,
    orbitSpeed: 30,
    color: '#eab308',
  },
  {
    id: 'neural-nexus',
    name: 'Neural Nexus',
    description: 'Map your thoughts in 3D. Discover hidden connections between ideas.',
    category: 'Mind',
    status: 'coming-soon',
    orbitRadius: 2.2,
    orbitSpeed: 40,
    color: '#a855f7',
  },
  {
    id: 'wealth-codex',
    name: 'Wealth Codex',
    description: 'Financial wisdom from ancient merchants to modern masters.',
    category: 'Finances',
    status: 'coming-soon',
    orbitRadius: 2.8,
    orbitSpeed: 50,
    color: '#f59e0b',
  },
  {
    id: 'void-chamber',
    name: 'Void Chamber',
    description: 'Minimalist meditation with binaural frequencies.',
    category: 'Spirituality',
    status: 'coming-soon',
    orbitRadius: 3.4,
    orbitSpeed: 60,
    color: '#6366f1',
  },
  {
    id: 'quantum-journal',
    name: 'Quantum Journal',
    description: 'Reality manifesting through structured intention.',
    category: 'Mind',
    status: 'coming-soon',
    orbitRadius: 4,
    orbitSpeed: 70,
    color: '#ec4899',
  },
]
