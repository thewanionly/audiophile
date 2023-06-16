import { render, screen } from '@/tests'
import { CategoryCard } from './CategoryCard'

const mockedCategory = {
  image: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
  name: 'Headphones',
  href: '/headphones',
}

const setup = () => {
  render(
    <CategoryCard
      image={mockedCategory.image}
      name={mockedCategory.name}
      href={mockedCategory.href}
    />
  )
}

describe('CategoryCard', () => {
  it('displays category image', () => {
    setup()

    const categoryImg = screen.getByAltText(mockedCategory.name)

    expect(categoryImg).toBeInTheDocument()
    expect(categoryImg).toHaveAttribute('src', mockedCategory.image)
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
    expect(categoryLink).toHaveAttribute('href', mockedCategory.href)
  })
})
