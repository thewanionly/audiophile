import Image, { ImageProps } from 'next/image'

import { theme } from '@/styles'

type ResponsiveImageProps = Omit<ImageProps, 'src'> & {
  className?: string
  src: ResponsiveImageSrc
  alt: string
}

export const ResponsiveImage = ({ className = '', src, alt, ...rest }: ResponsiveImageProps) => (
  <picture>
    <source media={theme.breakPoints.mobile} srcSet={src.mobile} />
    <source media={theme.breakPoints.desktop} srcSet={src.desktop} />
    <source media={theme.breakPoints.tabletPortrait} srcSet={src.tablet} />
    <Image className={className} {...rest} src={src.desktop} alt={alt} />
  </picture>
)
