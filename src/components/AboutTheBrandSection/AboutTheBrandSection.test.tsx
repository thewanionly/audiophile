import { render, screen } from '@/tests'
import { AboutTheBrandSection } from './AboutTheBrandSection'
import { mockedBrandDetails } from '@/tests/__mocks__/data'

const setup = () => {
  render(
    <AboutTheBrandSection
      heading={mockedBrandDetails.heading}
      description={mockedBrandDetails.description}
    />
  )
}

describe('AboutTheBrandSection', () => {
  it('displays brand heading', () => {
    setup()

    const brandHeading = screen.getByRole('heading', { name: mockedBrandDetails.heading })
    expect(brandHeading).toBeInTheDocument()
  })

  it('displays brand description', () => {
    setup()

    const brandHeading = screen.getByText(mockedBrandDetails.description)
    expect(brandHeading).toBeInTheDocument()
  })
})
