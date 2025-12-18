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
    id: 'stoic-oracle',
    name: 'Stoic Oracle',
    description:
      'Daily wisdom from Marcus Aurelius, Seneca, and Epictetus. Ancient philosophy for modern challenges.',
    icon: '🏛️',
    category: 'ancient-wisdom',
    tags: ['Stoicism', 'Daily Practice'],
    status: 'live',
    url: '#',
    featured: true,
  },
  {
    id: 'breath-guide',
    name: 'Breath Guide',
    description:
      'Guided breathing techniques from ancient traditions. Pranayama, Wim Hof, and more.',
    icon: '🌬️',
    category: 'healing',
    tags: ['Breathwork', 'Meditation'],
    status: 'live',
    url: '#',
  },
  {
    id: 'mind-map',
    name: 'Neural Nexus',
    description:
      'Map your thoughts and discover hidden connections. Visual thinking for the modern mind.',
    icon: '🕸️',
    category: 'mind',
    tags: ['Thinking', 'Visualization'],
    status: 'beta',
    url: '#',
    featured: true,
  },
  {
    id: 'wealth-wisdom',
    name: 'Wealth Wisdom',
    description:
      'Financial principles from ancient merchants to modern masters. Build lasting prosperity.',
    icon: '⚖️',
    category: 'finances',
    tags: ['Investing', 'Mindset'],
    status: 'coming-soon',
  },
  {
    id: 'meditation-timer',
    name: 'Void Timer',
    description:
      'Minimalist meditation timer with ambient soundscapes. Enter the void, find clarity.',
    icon: '🔔',
    category: 'spirituality',
    tags: ['Meditation', 'Focus'],
    status: 'live',
    url: '#',
  },
  {
    id: 'philosophy-cards',
    name: 'Thought Cards',
    description:
      'Philosophical prompts to challenge your assumptions. Daily questions, deeper understanding.',
    icon: '🃏',
    category: 'philosophy',
    tags: ['Questions', 'Reflection'],
    status: 'beta',
    url: '#',
  },
  // Add your apps here following this pattern
]
