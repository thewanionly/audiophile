import type { Image, ImageUrlBuilder } from 'sanity'

const emptyResponsiveImage: ResponsiveImageType = {
  src: {
    mobile: '',
    tablet: '',
    desktop: '',
  },
  alt: '',
}

export const postProcessImage = (
  image: ResponsiveImageType,
  urlForImageFn: (source: Image) => ImageUrlBuilder
): ResponsiveImageType => {
  if (!image) return emptyResponsiveImage

  return {
    src: Object.fromEntries(
      Object.entries(image.src).map(([key, value]) => [key, urlForImageFn(value.asset._ref).url()])
    ) as unknown as ResponsiveImageSrc,
    alt: image.alt,
  }
}
