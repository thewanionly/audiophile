import { render, screen } from '@/tests'
import { mockedCartItems } from '@/tests/__mocks__/data/cart'
import { CHECKOUT, GO_BACK } from '@/utils/constants'

import { Checkout } from './Checkout'

jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn(() => ({
      back: jest.fn(),
    })),
    useServerInsertedHTML: jest.fn(),
  }
})

// Mock "useCartState" and "useCartActions"
jest.mock('@/store/cart', () => ({
  __esModule: true,
  useCartState: jest.fn(() => ({
    items: mockedCartItems,
    totalItems: mockedCartItems.length,
    totalPrice: mockedCartItems.reduce(
      (total, { quantity, product }) => total + quantity * product.price,
      0
    ),
  })),
  useCartActions: jest.fn(() => ({
    removeAllItems: jest.fn(),
  })),
}))

// Mock "useIsStoreHydrated"
jest.mock('@/store/hydration', () => ({
  __esModule: true,
  useIsStoreHydrated: jest.fn(() => true),
}))

const setup = () => {
  render(<Checkout />)
}

describe('Checkout', () => {
  it('displays back button', () => {
    setup()

    const backButton = screen.getByRole('button', { name: GO_BACK })
    expect(backButton).toBeInTheDocument()
  })

  it('displays checkout heading', () => {
    setup()

    const checkoutHeading = screen.getByRole('heading', { name: CHECKOUT })
    expect(checkoutHeading).toBeInTheDocument()
  })

  it('displays checkout form', () => {
    setup()

    const checkoutForm = screen.getByRole('form', { name: /checkout form/i })
    expect(checkoutForm).toBeInTheDocument()
  })
})
