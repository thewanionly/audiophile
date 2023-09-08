import { render, screen } from '@/tests'
import { mockedCartItems } from '@/tests/__mocks__/data/cart'
import { formatPrice } from '@/utils/helpers'

import { CartItem, CartItemProps } from './CartItem'

const { product, quantity } = mockedCartItems[0]
const productHref = `/${product.category}/${product.slug}`

const setup = (params?: Partial<CartItemProps>) => {
  const { withActions = true } = params || {}

  render(
    <CartItem
      image={product.image}
      name={product.short_name}
      slug={product.slug}
      category={product.category}
      price={product.price}
      quantity={quantity}
      withActions={withActions}
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

    const productShortName = screen.getByText(product.short_name)

    expect(productShortName).toBeInTheDocument()
  })

  it('contains link to the product detail page in the product short name', () => {
    setup()

    const productNameLink = screen.getByRole('link', { name: product.short_name })
    expect(productNameLink).toHaveAttribute('href', productHref)
  })

  it('displays product price', () => {
    setup()

    const productPrice = screen.getByText(formatPrice(product.price))

    expect(productPrice).toBeInTheDocument()
  })

  it('displays input stepper with quantity as value if withActions is true', () => {
    setup()

    const inputStepper = screen.getByRole('textbox')

    expect(inputStepper).toBeInTheDocument()
    expect(inputStepper).toHaveValue(quantity.toString())
  })

  it('displays delete button icon if withActions is true', () => {
    setup()

    const deleteButtonIcon = screen.getByRole('button', { name: /trash icon/i })
    expect(deleteButtonIcon).toBeInTheDocument()
  })

  it('displays quantity value text (no input stepper) if withActions is false', () => {
    setup({ withActions: false })

    const quantityValue = screen.getByTestId('quantity-value')
    expect(quantityValue).toBeInTheDocument()
    expect(quantityValue).toHaveTextContent(`x ${quantity}`)
  })
})
