import { render, screen } from '@/tests'

import * as mantineHooks from '@mantine/hooks'

import { theme } from '@/styles'

import { Header } from './Header'
import { logo, navItems } from '@/tests/__mocks__/data'

/*
 * Mock of @mantine/hooks setup START
 * Setup mock this way so it can be overridden per test
 * Many thanks to this blog: https://mikeborozdin.com/post/changing-jest-mocks-between-tests/
 */
const mockedMantineHooks = mantineHooks as {
  useMediaQuery: (query: string) => boolean
}

// By default desktop size is rendered
const useMediaQueryMock = (query: string) => query === theme.breakPoints.desktop

jest.mock('@mantine/hooks', () => ({
  __esModule: true,
  useMediaQuery: jest.fn((query: string) => useMediaQueryMock(query)),
}))

// Override to return false, indicating screen is not desktop
const renderMobileSize = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  mockedMantineHooks.useMediaQuery = () => useMediaQueryMock(theme.breakPoints.mobile)
}

// Override to return false, indicating screen is not desktop
const renderTabletSize = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  mockedMantineHooks.useMediaQuery = () => useMediaQueryMock(theme.breakPoints.tabletLandscape)
}

// Default
const renderDesktopSize = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  mockedMantineHooks.useMediaQuery = () => useMediaQueryMock(theme.breakPoints.desktop)
}

/** Mock of common/hooks setup END */

beforeEach(() => {
  renderDesktopSize()
})

describe('Header', () => {
  describe('Logo', () => {
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
  })

  describe('Nav links', () => {
    it('hides navigation links in mobile', () => {
      renderMobileSize()
      render(<Header navItems={navItems} />)

      navItems.forEach(({ label }) =>
        expect(screen.queryByRole('link', { name: label })).not.toBeInTheDocument()
      )
    })

    it('hides navigation links in tablet', () => {
      renderTabletSize()
      render(<Header navItems={navItems} />)

      navItems.forEach(({ label }) =>
        expect(screen.queryByRole('link', { name: label })).not.toBeInTheDocument()
      )
    })

    it('displays navigation links in desktop', () => {
      render(<Header navItems={navItems} />)

      navItems.forEach(({ label, href }) => {
        const navItem = screen.getByRole('link', { name: label })

        expect(navItem).toBeInTheDocument()
        expect(navItem).toHaveAttribute('href', href)
      })
    })
  })

  describe('Menu Icon', () => {
    it('displays menu icon in mobile', () => {
      renderMobileSize()
      render(<Header navItems={navItems} />)

      const menuUIcon = screen.getByRole('button', { name: 'menu close' })

      expect(menuUIcon).toBeInTheDocument()
    })

    it('displays menu icon in tablet', () => {
      renderTabletSize()
      render(<Header navItems={navItems} />)

      const menuUIcon = screen.getByRole('button', { name: 'menu close' })

      expect(menuUIcon).toBeInTheDocument()
    })

    it('hides menu icon in desktop', () => {
      render(<Header navItems={navItems} />)

      const menuUIcon = screen.queryByRole('button', { name: 'menu close' })

      expect(menuUIcon).not.toBeInTheDocument()
    })
  })
})
