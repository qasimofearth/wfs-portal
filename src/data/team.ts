export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  links?: {
    website?: string
    twitter?: string
    linkedin?: string
  }
}

export const team: TeamMember[] = [
  {
    id: 'tim-mullen',
    name: 'Dr. Tim Mullen',
    role: 'Co-Founder',
    bio: 'Neuroscientist and entrepreneur pioneering brain-computer interfaces. PhD from UC San Diego, founder of Intheon and Sanmai. Creator of the Glass Brain project. His work bridges neuroscience, consciousness, and emerging technology.',
    links: {
      website: 'https://www.mozartandthemind.com/tim-mullen',
    },
  },
  {
    id: 'qasim-anwar',
    name: 'Qasim Anwar',
    role: 'Co-Founder',
    bio: 'Builder at the intersection of ancient wisdom and modern technology. Creating tools for human optimization and expanded consciousness.',
    links: {
      twitter: 'https://twitter.com/qasimofearth',
    },
  },
]
