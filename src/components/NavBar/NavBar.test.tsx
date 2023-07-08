import { render, screen } from '@/tests'

import { NavBar, NavItem } from './NavBar'

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

describe('NavBar', () => {
  it('displays the nav items', () => {
    render(<NavBar items={navItems} />)

    navItems.forEach(({ label }) =>
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    )
  })

  it('contains appropriate links in each of the nav items', () => {
    render(<NavBar items={navItems} />)

    navItems.forEach(({ label, href }) =>
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href)
    )
  })
})
