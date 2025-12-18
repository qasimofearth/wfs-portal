export interface Category {
  id: string
  name: string
  description: string
  icon: string
  color: string
}

export const categories: Category[] = [
  {
    id: 'ancient-wisdom',
    name: 'Ancient Wisdom',
    description: 'Timeless knowledge from civilizations past',
    icon: '📜',
    color: '#D4A843',
  },
  {
    id: 'healing',
    name: 'Healing',
    description: 'Tools for body, mind, and spirit restoration',
    icon: '🌿',
    color: '#4ADE80',
  },
  {
    id: 'mind',
    name: 'Mind',
    description: 'Expand consciousness and mental clarity',
    icon: '🧠',
    color: '#A78BFA',
  },
  {
    id: 'finances',
    name: 'Finances',
    description: 'Wisdom for abundance and prosperity',
    icon: '💰',
    color: '#FBBF24',
  },
  {
    id: 'spirituality',
    name: 'Spirituality',
    description: 'Connect with the deeper dimensions of existence',
    icon: '✨',
    color: '#F472B6',
  },
  {
    id: 'philosophy',
    name: 'Philosophy',
    description: 'Explore the fundamental nature of reality',
    icon: '🔮',
    color: '#60A5FA',
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Harmony with the natural world',
    icon: '🌍',
    color: '#34D399',
  },
  {
    id: 'creativity',
    name: 'Creativity',
    description: 'Unlock your creative potential',
    icon: '🎨',
    color: '#FB923C',
  },
]
