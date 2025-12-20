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
    bio: 'Cognitive scientist and designer. PhD from Carnegie Mellon, postdoc with Don Norman. Founded NeuroUX and Playpower Labs. Learning games reaching 3M+ students.',
    links: {
      website: 'https://www.derek-lomas.com/',
    },
  },
  {
    id: 'albert-lin',
    name: 'Dr. Albert Lin',
    role: 'Co-Founder',
    bio: 'National Geographic Explorer. Host of Lost Cities. Founded UCSD Center for Human Frontiers. Adventurer of the Year for the Valley of the Khans expedition.',
    links: {
      website: 'https://exploreralbert.com/',
    },
  },
  {
    id: 'eliah-aronoff-spencer',
    name: 'Dr. Eliah Aronoff-Spencer',
    role: 'Co-Founder',
    bio: 'MD/PhD, Associate Professor at UC San Diego. Director of Center for Health Design. Competed in $10M Qualcomm Tricorder XPRIZE.',
    links: {
      website: 'https://profiles.ucsd.edu/eliah.aronoff-spencer',
    },
  },
  {
    id: 'leo-trottier',
    name: 'Leo Trottier',
    role: 'Co-Founder',
    bio: 'Cognitive scientist and entrepreneur. Founded CleverPet and FluentPet for interspecies communication. MS Cognitive Science from UCSD.',
    links: {
      linkedin: 'https://www.linkedin.com/in/leotrottier/',
    },
  },
  {
    id: 'tim-mullen',
    name: 'Dr. Tim Mullen',
    role: 'Co-Founder',
    bio: 'Neuroscientist pioneering brain-computer interfaces. PhD from UCSD. Founded Intheon and Sanmai. Creator of the Glass Brain project.',
    links: {
      website: 'https://www.mozartandthemind.com/tim-mullen',
    },
  },
  {
    id: 'qasim-anwar',
    name: 'Qasim Anwar',
    role: 'Co-Founder',
    bio: 'Builder at the intersection of ancient wisdom and emerging technology. Creating tools for human optimization.',
    links: {
      twitter: 'https://twitter.com/qasimofearth',
    },
  },
  {
    id: 'luke-barrington',
    name: 'Luke Barrington',
    role: 'Co-Founder',
    bio: 'AI/ML leader and PhD from UCSD. Founded Tomnod for crowdsourced satellite analysis. Led the Valley of the Khans project with 10K+ volunteers.',
    links: {
      website: 'http://lukebarrington.com/',
      linkedin: 'https://www.linkedin.com/in/lukebarrington/',
    },
  },
]
