interface NavLink {
  label: string
  href: string
  order: number
}

interface Social {
  name: string
  icon: import('@/components').IconName
  link: string
}

interface Footer {
  website_desc: string
  copyright: {
    line_1: string
    line_2: string
  }
  socials: Social[]
}
