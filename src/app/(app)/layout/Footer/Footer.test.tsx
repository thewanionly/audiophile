import { render, screen } from '@/tests'
import { logo, navItems } from '@/tests/__mocks__/data'

import { Footer } from './Footer'

describe('Footer', () => {
  describe('Logo', () => {
    it('displays the app logo', () => {
      render(<Footer navItems={navItems} />)

      const logoImg = screen.getByAltText(logo.alt)

      expect(logoImg).toBeInTheDocument()
      expect(logoImg).toHaveAttribute('src', logo.src)
    })

    it('contains link to Home page in the logo', () => {
      render(<Footer navItems={navItems} />)

      const logoLink = screen.getByRole('link', { name: logo.alt })

      expect(logoLink).toHaveAttribute('href', '/')
    })
  })

  it('displays navigation links', () => {
    render(<Footer navItems={navItems} />)

    navItems.forEach(({ label, href }) => {
      const navItem = screen.getByRole('link', { name: label })

      expect(navItem).toBeInTheDocument()
      expect(navItem).toHaveAttribute('href', href)
    })
  })
})
