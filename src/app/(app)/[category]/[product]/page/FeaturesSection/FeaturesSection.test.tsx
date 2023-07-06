import { render, screen } from '@/tests'

import { mockedProduct } from '@/tests/__mocks__/data/product'
import { FeaturesSection } from './FeaturesSection'

import { FEATURES_SECTION_HEADING } from '../../utils/constants'

const setup = () => {
  render(<FeaturesSection data={mockedProduct.features} />)
}

describe('Features Section', () => {
  it('displays section heading', () => {
    setup()

    const sectionHeading = screen.getByRole('heading', {
      name: FEATURES_SECTION_HEADING,
    })
    expect(sectionHeading).toBeInTheDocument()
  })

  it('displays section body', () => {
    setup()

    const productDescription = screen.getByText(mockedProduct.features)
    expect(productDescription).toBeInTheDocument()
  })
})
