import { render, screen } from '@/tests'
import { mockedCategories } from '@/tests/__mocks__/data'

import { CategoryCard } from './CategoryCard'

const mockedCategory = mockedCategories[0]

const setup = () => {
  render(
    <CategoryCard
      image={mockedCategory.image}
      name={mockedCategory.name}
      href={mockedCategory.slug}
    />
  )
}

describe('CategoryCard', () => {
  it('displays category image', () => {
    setup()

    const categoryImg = screen.getByAltText(mockedCategory.image.alt)

    expect(categoryImg).toBeInTheDocument()
    expect(categoryImg).toHaveAttribute('src', mockedCategory.image.src.desktop)
  })

  it('displays category name', () => {
    setup()

    const categoryName = screen.getByText(mockedCategory.name)

    expect(categoryName).toBeInTheDocument()
  })

  it('displays category link', () => {
    setup()

    const categoryLink = screen.getByRole('link', { name: /shop/i })

    expect(categoryLink).toBeInTheDocument()
    expect(categoryLink).toHaveAttribute('href', mockedCategory.slug)
  })
})
