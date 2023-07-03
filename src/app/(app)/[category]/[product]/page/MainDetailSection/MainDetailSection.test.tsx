import { render, screen } from '@/tests'

import { MainDetailSection } from './MainDetailSection'
import { mockedProduct } from '@/tests/__mocks__/data/product'

const { slug, name, image, category, new: isNew, price, description } = mockedProduct

const setup = () => {
  render(
    <MainDetailSection
      slug={slug}
      name={name}
      image={image}
      category={category}
      new={isNew}
      price={price}
      description={description}
    />
  )
}

describe('Main Detail Section', () => {
  it('displays product name', () => {
    setup()

    const productName = screen.getByRole('heading', {
      name,
    })
    expect(productName).toBeInTheDocument()
  })
})
