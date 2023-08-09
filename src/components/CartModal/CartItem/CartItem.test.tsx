import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'
import { mockedCartItems } from '@/tests/__mocks__/data/cart'
import { formatPrice } from '@/utils/helpers'

import { CartItem } from './CartItem'

const { product, quantity } = mockedCartItems[0]

const setup = () => {
  render(
    <CartItem
      image={product.image}
      name={product.name}
      slug={product.slug}
      category={product.category}
      price={product.price}
      quantity={quantity}
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

  it('displays product short name', () => {
    setup()

    const productShortName = screen.getByText(product.name)

    expect(productShortName).toBeInTheDocument()
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
