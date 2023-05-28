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
    href: 'home',
    order: 1,
  },
  {
    label: 'Test',
    href: 'test',
    order: 2,
  },
]

describe('Header', () => {
  it('displays the logo', () => {
    render(<Header navItems={navItems} />)

    const logoImg = screen.getByAltText(logo.alt)

    expect(logoImg).toBeInTheDocument()
    expect(logoImg).toHaveAttribute('src', logo.src)
  })

  it('contains link to Home page in the logo', () => {
    render(<Header navItems={navItems} />)

    const logoLink = screen.getByRole('link', { name: logo.alt })

    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('displays navigation links', () => {
    render(<Header navItems={navItems} />)

    navItems.forEach(({ label, href }) => {
      const navItem = screen.getByRole('link', { name: label })

      expect(navItem).toBeInTheDocument()
      expect(navItem).toHaveAttribute('href', href)
    })
  })
})
