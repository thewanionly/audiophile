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

  it('displays copyright text', () => {
    setup()

    const copyRightTextLine1 = screen.getByText(new RegExp(mockedFooterData.copyright.line_1))
    const copyRightTextLine2 = screen.getByText(new RegExp(mockedFooterData.copyright.line_2))

    expect(copyRightTextLine1).toBeInTheDocument()
    expect(copyRightTextLine2).toBeInTheDocument()
  })

  it('displays social icons/links', () => {
    setup()

    mockedFooterData.socials.forEach(({ icon, link }) => {
      const socialItem = screen.getByRole('link', { name: `${icon} icon` })

      expect(socialItem).toBeInTheDocument()
      expect(socialItem).toHaveAttribute('href', link)
    })
  })
})
