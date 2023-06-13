import { render, screen } from '@/tests'
import { logo, navItems, mockedFooterData } from '@/tests/__mocks__/data'

import { Footer } from './Footer'

const setup = () => {
  render(<Footer navItems={navItems} data={mockedFooterData} />)
}

describe('Footer', () => {
  describe('Logo', () => {
    it('displays the app logo', () => {
      setup()

      const logoImg = screen.getByAltText(logo.alt)

      expect(logoImg).toBeInTheDocument()
      expect(logoImg).toHaveAttribute('src', logo.src)
    })

    it('contains link to Home page in the logo', () => {
      setup()

      const logoLink = screen.getByRole('link', { name: logo.alt })

      expect(logoLink).toHaveAttribute('href', '/')
    })
  })

  it('displays navigation links', () => {
    setup()

    navItems.forEach(({ label, href }) => {
      const navItem = screen.getByRole('link', { name: label })

      expect(navItem).toBeInTheDocument()
      expect(navItem).toHaveAttribute('href', href)
    })
  })

  it('displays website description text', () => {
    setup()

    const websiteDesc = screen.getByText(mockedFooterData.website_desc)
    expect(websiteDesc).toBeInTheDocument()
  })
})
