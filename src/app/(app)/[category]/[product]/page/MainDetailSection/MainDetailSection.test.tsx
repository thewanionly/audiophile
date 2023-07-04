import { render, screen } from '@/tests'

import { MainDetailSection } from './MainDetailSection'
import { mockedProduct } from '@/tests/__mocks__/data/product'
import { NEW_PRODUCT } from '@/utils/constants'

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
  it('displays  product image', () => {
    setup()

    const productImage = screen.getByAltText(image.alt)

    expect(productImage).toBeInTheDocument()
    expect(productImage).toHaveAttribute('src', image.src.desktop)
  })

  it(`displays ${NEW_PRODUCT} if category product is new`, () => {
    setup()

    if (isNew) {
      expect(screen.getByText(NEW_PRODUCT)).toBeInTheDocument()
    } else {
      expect(screen.queryByText(NEW_PRODUCT)).not.toBeInTheDocument()
    }
  })

  it('displays product name', () => {
    setup()

    const productName = screen.getByRole('heading', {
      name,
    })
    expect(productName).toBeInTheDocument()
  })

  it('displays product description', () => {
    setup()

    const productDescription = screen.getByText(description)
    expect(productDescription).toBeInTheDocument()
  })
})
