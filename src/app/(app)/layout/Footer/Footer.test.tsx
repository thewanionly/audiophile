import { render, screen } from '@/tests'
import { logo } from '@/tests/__mocks__/data'

import { Footer } from './Footer'

describe('Footer', () => {
  it('displays the app logo', () => {
    render(<Footer />)

    const logoImg = screen.getByAltText(logo.alt)

    expect(logoImg).toBeInTheDocument()
    expect(logoImg).toHaveAttribute('src', logo.src)
  })
})
