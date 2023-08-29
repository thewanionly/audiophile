import { IconName } from '@/components'
import { render, screen } from '@/tests'
import { mockedCartItems } from '@/tests/__mocks__/data/cart'
import { formatPrice } from '@/utils/helpers'

import {
  BACK_TO_HOME,
  ORDER_CONFIRMATION_PRIMARY_MESSAGE,
  ORDER_CONFIRMATION_SECONDARY_MESSAGE,
  SHIPPING_FEE,
} from '../../utils/constants'
import { ORDER_COMPUTATIONS } from '../OrderSummary'
import { OrderConfirmationModal } from './OrderConfirmationModal'

const cartState = () => ({
  items: mockedCartItems,
  totalItems: mockedCartItems.length,
  totalPrice: mockedCartItems.reduce(
    (total, { quantity, product }) => total + quantity * product.price,
    0
  ),
})

// Mock "useCartState"
jest.mock('@/store/cart', () => ({
  __esModule: true,
  useCartState: jest.fn(() => cartState()),
  useCartActions: jest.fn(() => ({
    removeAllItems: jest.fn(),
  })),
}))

const setup = () => {
  render(<OrderConfirmationModal open onClose={jest.fn()} />)
}

describe('OrderConfirmationModal', () => {
  it('displays check icon ', () => {
    setup()

    const checkIcon = screen.getByLabelText(`${IconName.Check} icon`)
    expect(checkIcon).toBeInTheDocument()
  })

  it('displays order confirmation primary message', () => {
    setup()

    const primaryMessage = screen.getByRole('heading', {
      name: ORDER_CONFIRMATION_PRIMARY_MESSAGE,
    })
    expect(primaryMessage).toBeInTheDocument()
  })

  it('displays order confirmation secondary message', () => {
    setup()

    const secondaryMessage = screen.getByText(ORDER_CONFIRMATION_SECONDARY_MESSAGE)
    expect(secondaryMessage).toBeInTheDocument()
  })

  it('displays first ordered cart item', () => {
    setup()

    const firstOrderedCartItem = screen.getByText(mockedCartItems[0].product.name)
    expect(firstOrderedCartItem).toBeInTheDocument()
  })

  it('displays other items count', () => {
    setup()

    const otherItemsCount = mockedCartItems.length - 1
    const otherItemsCountEl = screen.getByTestId('other-items-count')
    expect(otherItemsCountEl).toHaveTextContent(`${otherItemsCount}`)
  })

  it(`displays ${ORDER_COMPUTATIONS.grandTotal.label} value`, () => {
    setup()

    const valueText = screen.getByLabelText(ORDER_COMPUTATIONS.grandTotal.label)
    expect(valueText).toBeInTheDocument()
    expect(valueText).toHaveTextContent(formatPrice(cartState().totalPrice + SHIPPING_FEE))
  })

  it('displays home link', () => {
    setup()

    const homeLink = screen.getByRole('link', { name: BACK_TO_HOME })
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
