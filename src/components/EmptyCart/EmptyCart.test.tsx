import { render, screen } from '@/tests'

import { EmptyCart } from './EmptyCart'
import {
  EMPTY_CART_ALT_TEXT,
  EMPTY_CART_IMG_SRC,
  EMPTY_CART_PRIMARY_MESSAGE,
} from './EmptyCart.utils'

const actionMessage = 'Please add some item in your cart'

const setup = () => {
  render(<EmptyCart actionMessage={actionMessage} />)
}

describe('Empty cart', () => {
  it('displays empty cart image', () => {
    setup()

    const emptyCartImg = screen.getByAltText(EMPTY_CART_ALT_TEXT)

    expect(emptyCartImg).toBeInTheDocument()
    expect(emptyCartImg).toHaveAttribute('src', EMPTY_CART_IMG_SRC)
  })

  it('displays empty cart primary message', () => {
    setup()

    const emptyCartMessage = screen.getByText(EMPTY_CART_PRIMARY_MESSAGE)

    expect(emptyCartMessage).toBeInTheDocument()
  })

  it('displays empty cart action message', () => {
    setup()

    const actionMessageEl = screen.getByText(actionMessage)

    expect(actionMessageEl).toBeInTheDocument()
  })
})
