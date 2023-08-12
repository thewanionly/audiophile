import { render, screen } from '@/tests'
import { GO_BACK } from '@/utils/constants'

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

    const checkoutHeading = screen.getByRole('heading', { name: /checkout/i })
    expect(checkoutHeading).toBeInTheDocument()
  })
})
