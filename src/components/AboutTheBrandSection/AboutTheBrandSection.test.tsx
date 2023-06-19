import { toPlainText } from '@portabletext/react'

import { render, screen } from '@/tests'
import { AboutTheBrandSection } from './AboutTheBrandSection'
import { mockedBrandDetails } from '@/tests/__mocks__/data'

const setup = () => {
  render(
    <AboutTheBrandSection
      heading={mockedBrandDetails.heading}
      description={mockedBrandDetails.description}
      image={mockedBrandDetails.image}
    />
  )
}

describe('AboutTheBrandSection', () => {
  it('displays brand section heading', () => {
    setup()

    const heading = screen.getByRole('heading', { name: toPlainText(mockedBrandDetails.heading) })
    expect(heading).toBeInTheDocument()
  })

  it('displays brand section description', () => {
    setup()

    const description = screen.getByText(mockedBrandDetails.description)
    expect(description).toBeInTheDocument()
  })

  it('displays brand section image', () => {
    setup()

    const image = screen.getByAltText(mockedBrandDetails.image.alt)

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', mockedBrandDetails.image.src.desktop)
  })
})
