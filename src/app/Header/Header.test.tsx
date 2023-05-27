import { render, screen } from '@/tests'
import { Header } from './Header'

const logo = {
  src: '/icons/logo.svg',
  alt: 'logo of audiophile',
}

describe('Header', () => {
  it('displays the logo', () => {
    render(<Header />)

    const logoEl = screen.getByAltText(logo.alt)

    expect(logoEl).toBeInTheDocument()
    expect(logoEl).toHaveAttribute('src', logo.src)
  })
})
