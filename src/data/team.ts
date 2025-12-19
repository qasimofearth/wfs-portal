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
    id: 'derek-lomas',
    name: 'Dr. Derek Lomas',
    role: 'Co-Founder',
    bio: 'Cognitive scientist and designer. PhD from Carnegie Mellon, postdoc at UCSD Design Lab with Don Norman. Founded NeuroUX and Playpower Labs. His learning games have reached 3M+ students.',
    links: {
      website: 'https://www.derek-lomas.com/',
      twitter: 'https://twitter.com/dereklomas',
    },
  },
  {
    id: 'albert-lin',
    name: 'Dr. Albert Lin',
    role: 'Co-Founder',
    bio: 'National Geographic Explorer and host of Lost Cities. Founded UC San Diego\'s Center for Human Frontiers. Named Adventurer of the Year for the Valley of the Khans expedition.',
    links: {
      website: 'https://exploreralbert.com/',
      twitter: 'https://twitter.com/exploreralbert',
    },
  },
  {
    id: 'eliah-aronoff-spencer',
    name: 'Dr. Eliah Aronoff-Spencer',
    role: 'Co-Founder',
    bio: 'MD/PhD, Associate Professor at UC San Diego. Director of the Center for Health Design. Competed in the $10M Qualcomm Tricorder XPRIZE. Pioneer in distributed health diagnostics.',
    links: {
      website: 'https://profiles.ucsd.edu/eliah.aronoff-spencer',
    },
  },
  {
    id: 'leo-trottier',
    name: 'Leo Trottier',
    role: 'Co-Founder',
    bio: 'Cognitive scientist and entrepreneur. Founded CleverPet and FluentPet, creating technology for interspecies communication. MS in Cognitive Science from UCSD. StartX and Techstars alum.',
    links: {
      website: 'https://clever.pet/pages/leo-trottier',
      linkedin: 'https://www.linkedin.com/in/leotrottier/',
    },
  },
  {
    id: 'qasim-anwar',
    name: 'Qasim Anwar',
    role: 'Co-Founder',
    bio: 'Builder and explorer at the intersection of technology and human potential. Creating tools for cellular optimization and expanded consciousness.',
    links: {
      twitter: 'https://twitter.com/qasimofearth',
    },
  },
]
