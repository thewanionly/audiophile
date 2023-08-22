import { IconName } from '@/components'
import { render, screen } from '@/tests'

import {
  ORDER_CONFIRMATION_PRIMARY_MESSAGE,
  ORDER_CONFIRMATION_SECONDARY_MESSAGE,
} from '../../utils/constants'
import { OrderConfirmationModal } from './OrderConfirmationModal'

const setup = () => {
  render(<OrderConfirmationModal open closeConfirmationModal={jest.fn()} />)
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
})
