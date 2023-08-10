import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'
import { mockedCartItems } from '@/tests/__mocks__/data/cart'
import { formatPrice } from '@/utils/helpers'

import { CartItem } from './CartItem'

const { product, quantity } = mockedCartItems[0]
const productHref = `/${product.category}/${product.slug}`

const setup = () => {
  render(
    <CartItem
      image={product.image}
      name={product.name}
      slug={product.slug}
      category={product.category}
      price={product.price}
      quantity={quantity}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      closeModal={() => {}}
    />
  )
}

describe('CartItem', () => {
  it('displays product image', () => {
    setup()

    const productImg = screen.getByAltText(product.image.alt)

    expect(productImg).toBeInTheDocument()
    expect(productImg).toHaveAttribute('src', product.image.src.desktop)
  })

  it('contains link to the product detail page in the product image', () => {
    setup()

    const productImgLink = screen.getByRole('link', { name: product.image.alt })
    expect(productImgLink).toHaveAttribute('href', productHref)
  })

  it('displays product short name', () => {
    setup()

    const productShortName = screen.getByText(product.name)

    expect(productShortName).toBeInTheDocument()
  })

  it('contains link to the product detail page in the product short name', () => {
    setup()

    const productNameLink = screen.getByRole('link', { name: product.name })
    expect(productNameLink).toHaveAttribute('href', productHref)
  })

  it('displays product price', () => {
    setup()

    const productPrice = screen.getByText(formatPrice(product.price))

    expect(productPrice).toBeInTheDocument()
  })

  it('displays input stepper with quantity as value', () => {
    setup()

    const inputStepper = screen.getByRole('textbox')

    expect(inputStepper).toBeInTheDocument()
    expect(inputStepper).toHaveValue(quantity.toString())
  })
})
