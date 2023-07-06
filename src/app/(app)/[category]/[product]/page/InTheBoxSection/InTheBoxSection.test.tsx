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

  it('displays list of items included in the box', () => {
    setup()

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(mockedProduct.includes.length)

    mockedProduct.includes.forEach(({ item }) => expect(screen.getByText(item)).toBeInTheDocument())
  })
})
