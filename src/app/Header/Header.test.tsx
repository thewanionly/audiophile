import { render, screen } from '@/tests'
import { NavItem } from '@/components'

import { Header } from './Header'

const logo = {
  src: '/icons/logo.svg',
  alt: 'logo of audiophile',
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Headphones',
    href: '/headphones',
  },
  {
    label: 'Speakers',
    href: '/speakers',
  },
  {
    label: 'Earphones',
    href: '/earphones',
  },
]

describe('Header', () => {
  it('displays the logo', () => {
    render(<Header />)

    const logoImg = screen.getByAltText(logo.alt)

    expect(logoImg).toBeInTheDocument()
    expect(logoImg).toHaveAttribute('src', logo.src)
  })

  it('contains link to Home page in the logo', () => {
    render(<Header />)

    const logoLink = screen.getByRole('link', { name: logo.alt })

    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('displays navigation links', () => {
    render(<Header />)

    navItems.forEach(({ label, href }) => {
      const navItem = screen.getByRole('link', { name: label })

      expect(navItem).toBeInTheDocument()
      expect(navItem).toHaveAttribute('href', href)
    })
  })
})
