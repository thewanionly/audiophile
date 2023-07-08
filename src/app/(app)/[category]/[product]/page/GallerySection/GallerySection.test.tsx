import { render, screen } from '@/tests'
import { mockedProduct } from '@/tests/__mocks__/data/product'

import { GallerySection } from './GallerySection'

const { gallery } = mockedProduct

const setup = () => {
  render(<GallerySection data={gallery} />)
}

describe('Gallery Section', () => {
  it('displays first gallery image', () => {
    setup()

    const gallerImage1 = screen.getByAltText(gallery.first.alt)

    expect(gallerImage1).toBeInTheDocument()
    expect(gallerImage1).toHaveAttribute('src', gallery.first.src.desktop)
  })

  it('displays second gallery image', () => {
    setup()

    const gallerImage2 = screen.getByAltText(gallery.second.alt)

    expect(gallerImage2).toBeInTheDocument()
    expect(gallerImage2).toHaveAttribute('src', gallery.second.src.desktop)
  })

  it('displays third gallery image', () => {
    setup()

    const gallerImage3 = screen.getByAltText(gallery.third.alt)

    expect(gallerImage3).toBeInTheDocument()
    expect(gallerImage3).toHaveAttribute('src', gallery.third.src.desktop)
  })
})
