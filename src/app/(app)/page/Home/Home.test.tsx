import { render, screen } from '@/tests'
import { Home } from './Home'

describe('Home', () => {
  it('displays category card list section', () => {
    render(<Home />)

    const categoryCardList = screen.getByTestId('category-card-list')
    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCardList).toBeInTheDocument()
    expect(categoryCards.length).toBeGreaterThan(0)
  })
})
