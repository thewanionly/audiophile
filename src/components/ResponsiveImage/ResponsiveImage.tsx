import Image, { ImageProps } from 'next/image'

import { theme } from '@/styles'

type ResponsiveImageProps = Omit<ImageProps, 'src'> & {
  className?: string
  image: ResponsiveImageType
}

export const ResponsiveImage = ({ className = '', image, alt, ...rest }: ResponsiveImageProps) => (
  <picture>
    <source media={theme.breakPoints.mobile} srcSet={image.mobile.src} />
    <source media={theme.breakPoints.desktop} srcSet={image.desktop.src} />
    <source media={theme.breakPoints.tabletPortrait} srcSet={image.tablet.src} />
    <Image className={className} {...rest} src={image.desktop.src} alt={alt} />
  </picture>
)
