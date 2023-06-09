import { render, screen } from '@/tests'
import { Category } from './Category'

const mockedCategory = {
  name: 'headphones',
}

describe('Category', () => {
  it('displays category name as heading', () => {
    render(<Category name={mockedCategory.name} />)

    const categoryHeading = screen.getByRole('heading', { name: mockedCategory.name })
    expect(categoryHeading).toBeInTheDocument()
  })
})
