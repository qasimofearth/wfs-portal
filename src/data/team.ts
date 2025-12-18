export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  links?: {
    github?: string
    twitter?: string
    website?: string
  }
}

export const team: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Founder Name',
    role: 'Founder',
    bio: 'Passionate about building tools that expand the boundaries of human knowledge.',
    links: {
      github: '#',
      twitter: '#',
    },
  },
  // Add more team members here
  // {
  //   id: 'member-2',
  //   name: 'Team Member',
  //   role: 'Role Title',
  //   bio: 'Short bio about this team member.',
  //   links: {
  //     github: 'https://github.com/username',
  //     twitter: 'https://twitter.com/username',
  //   },
  // },
]
