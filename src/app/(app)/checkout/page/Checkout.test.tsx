import { render, screen } from '@/tests'
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
