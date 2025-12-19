export interface Category {
  id: string
  name: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    id: 'ancient-wisdom',
    name: 'Ancient Wisdom',
    description: 'Timeless knowledge from civilizations past',
    icon: '🏛️',
  },
  {
    id: 'healing',
    name: 'Healing',
    description: 'Restore body, mind, and spirit',
    icon: '🧬',
  },
  {
    id: 'mind',
    name: 'Mind',
    description: 'Expand consciousness and cognition',
    icon: '🧠',
  },
  {
    id: 'finances',
    name: 'Finances',
    description: 'Abundance and prosperity protocols',
    icon: '💎',
  },
  {
    id: 'spirituality',
    name: 'Spirituality',
    description: 'Connect with deeper dimensions',
    icon: '✨',
  },
  {
    id: 'philosophy',
    name: 'Philosophy',
    description: 'Explore the nature of reality',
    icon: '🔮',
  },
]
