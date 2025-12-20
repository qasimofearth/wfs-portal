export interface App {
  id: string
  name: string
  description: string
  planetId: string // which planet/category this belongs to
  status: 'live' | 'coming-soon'
  url?: string
  icon: string
}

// Apps organized by planet categories
export const apps: App[] = [
  // MERCURY - KNOWLEDGE (Learning, tools, thinking, communication)
  {
    id: 'source-library',
    name: 'Source Library',
    description: 'Curated collection of primary sources and timeless texts.',
    planetId: 'mercury',
    status: 'live',
    url: 'https://sourcelibrary.org',
    icon: '📚',
  },
  {
    id: 'neural-nexus',
    name: 'Neural Nexus',
    description: 'Map your thoughts in 3D. Discover hidden connections between ideas.',
    planetId: 'mercury',
    status: 'coming-soon',
    icon: '🧠',
  },
  {
    id: 'lingua-bridge',
    name: 'Lingua Bridge',
    description: 'Learn languages through ancient immersion techniques.',
    planetId: 'mercury',
    status: 'coming-soon',
    icon: '🗣️',
  },

  // VENUS - HEALTH (Body, mind, relationships, balance)
  {
    id: 'cellular-reset',
    name: 'Cellular Reset',
    description: 'Science-backed protocols for cellular regeneration and longevity.',
    planetId: 'venus',
    status: 'live',
    url: 'https://cell-reset.vercel.app',
    icon: '🧬',
  },
  {
    id: 'chorus',
    name: 'Chorus',
    description: 'Harmonize body and mind through sound healing protocols.',
    planetId: 'venus',
    status: 'live',
    url: 'https://chorus-production-cdad.up.railway.app',
    icon: '🎵',
  },
  {
    id: 'breath-temple',
    name: 'Breath Temple',
    description: 'Ancient breathwork practices for modern wellness.',
    planetId: 'venus',
    status: 'coming-soon',
    icon: '🌬️',
  },

  // EARTH - LIFE (Habits, community, daily living)
  {
    id: 'rhythm-keeper',
    name: 'Rhythm Keeper',
    description: 'Align your daily rhythms with natural cycles.',
    planetId: 'earth',
    status: 'coming-soon',
    icon: '🌅',
  },
  {
    id: 'tribe-circle',
    name: 'Tribe Circle',
    description: 'Build meaningful community connections.',
    planetId: 'earth',
    status: 'coming-soon',
    icon: '👥',
  },

  // MARS - ACTION (Tasks, energy, discipline)
  {
    id: 'warrior-path',
    name: 'Warrior Path',
    description: 'Disciplined goal tracking inspired by martial traditions.',
    planetId: 'mars',
    status: 'coming-soon',
    icon: '⚔️',
  },
  {
    id: 'focus-forge',
    name: 'Focus Forge',
    description: 'Deep work sessions with accountability rituals.',
    planetId: 'mars',
    status: 'coming-soon',
    icon: '🔥',
  },

  // JUPITER - WEALTH (Finance, growth, opportunity)
  {
    id: 'wealth-codex',
    name: 'Wealth Codex',
    description: 'Financial wisdom from ancient merchants to modern masters.',
    planetId: 'jupiter',
    status: 'coming-soon',
    icon: '💰',
  },
  {
    id: 'abundance-oracle',
    name: 'Abundance Oracle',
    description: 'Prosperity insights from cross-cultural wisdom traditions.',
    planetId: 'jupiter',
    status: 'coming-soon',
    icon: '🌟',
  },

  // SATURN - STRUCTURE (Time, planning, responsibility)
  {
    id: 'time-architect',
    name: 'Time Architect',
    description: 'Master your schedule with stoic time philosophy.',
    planetId: 'saturn',
    status: 'coming-soon',
    icon: '⏳',
  },
  {
    id: 'legacy-planner',
    name: 'Legacy Planner',
    description: 'Long-term life planning across decades.',
    planetId: 'saturn',
    status: 'coming-soon',
    icon: '🏛️',
  },

  // URANUS - INNOVATION (New ideas, future thinking)
  {
    id: 'fashion-archaeology',
    name: 'Fashion Archaeology',
    description: 'Exploring the history and future of fashion through artifacts.',
    planetId: 'uranus',
    status: 'live',
    url: 'https://fashionarchaeology.vercel.app',
    icon: '👗',
  },
  {
    id: 'future-vision',
    name: 'Future Vision',
    description: 'Scenario planning for personal and collective futures.',
    planetId: 'uranus',
    status: 'coming-soon',
    icon: '🔮',
  },

  // NEPTUNE - WISDOM (Literature, meaning, spirituality)
  {
    id: 'stoic-oracle',
    name: 'Stoic Oracle',
    description: 'Daily wisdom from Marcus Aurelius, Seneca, and Epictetus.',
    planetId: 'neptune',
    status: 'coming-soon',
    icon: '📜',
  },
  {
    id: 'void-chamber',
    name: 'Void Chamber',
    description: 'Minimalist meditation with binaural frequencies.',
    planetId: 'neptune',
    status: 'coming-soon',
    icon: '🕳️',
  },
  {
    id: 'dream-codex',
    name: 'Dream Codex',
    description: 'Interpret dreams through Jungian and ancient frameworks.',
    planetId: 'neptune',
    status: 'coming-soon',
    icon: '🌙',
  },

  // PLUTO - CHANGE (Transformation, healing, truth)
  {
    id: 'shadow-work',
    name: 'Shadow Work',
    description: 'Guided journaling for psychological integration.',
    planetId: 'pluto',
    status: 'coming-soon',
    icon: '🪞',
  },
  {
    id: 'quantum-journal',
    name: 'Quantum Journal',
    description: 'Reality manifesting through structured intention.',
    planetId: 'pluto',
    status: 'coming-soon',
    icon: '✨',
  },
]

// Helper to get apps by planet
export function getAppsByPlanet(planetId: string): App[] {
  return apps.filter(app => app.planetId === planetId)
}
