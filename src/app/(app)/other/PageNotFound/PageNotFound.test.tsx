import { render, screen } from '@/tests'

import { PageNotFound } from './PageNotFound'
import { NOT_FOUND_PRIMARY_MESSAGE, NOT_FOUND_SECONDARY_MESSAGE } from '@/utils/constants'

const setup = () => {
  render(<PageNotFound />)
}

describe('PageNotFound', () => {
  it('displays primary message', () => {
    setup()

    const primaryMessage = screen.getByRole('heading', { name: NOT_FOUND_PRIMARY_MESSAGE })
    expect(primaryMessage).toBeInTheDocument()
  })

  it('displays secondary message', () => {
    setup()

    const secondaryMessage = screen.getByText(NOT_FOUND_SECONDARY_MESSAGE)
    expect(secondaryMessage).toBeInTheDocument()
  })
})
