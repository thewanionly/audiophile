import { render, screen } from '@/tests'

import { mockedProduct } from '@/tests/__mocks__/data/product'
import { InTheBoxSection } from './InTheBoxSection'

import { IN_THE_BOX_SECTION_HEADING } from '../../utils/constants'

const setup = () => {
  render(<InTheBoxSection data={mockedProduct.includes} />)
}

describe('In The Box Section', () => {
  it('displays section heading', () => {
    setup()

    const sectionHeading = screen.getByRole('heading', {
      name: IN_THE_BOX_SECTION_HEADING,
    })
    expect(sectionHeading).toBeInTheDocument()
  })
})
