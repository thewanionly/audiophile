import { render, screen } from '@/tests'
import { NavMenu } from './NavMenu'

// Mock "useLayoutContext"
jest.mock('../Layout.context', () => ({
  __esModule: true,
  useLayoutContext: jest.fn(() => ({
    isNavMenuOpen: true,
  })),
}))

describe('NavMenu', () => {
  it('displays category card list', () => {
    render(<NavMenu />)

    const categoryCardList = screen.getByTestId('category-card-list')
    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCardList).toBeInTheDocument()
    expect(categoryCards.length).toBeGreaterThan(0)
  })
})
