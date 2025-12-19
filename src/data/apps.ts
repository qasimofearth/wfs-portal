export interface App {
  id: string
  name: string
  description: string
  category: string
  status: 'live' | 'coming-soon'
  url?: string
}

export const apps: App[] = [
  {
    id: 'cellular-reset',
    name: 'Cellular Reset',
    description: 'Science-backed protocols for cellular regeneration and longevity.',
    category: 'healing',
    status: 'live',
    url: 'https://cell-reset.vercel.app',
  },
]
