'use client'

import Image, { ImageProps } from 'next/image'
import styled from '@emotion/styled'

import { theme } from '@/styles'

const S = {
  ResponsiveImage: styled.picture`
    display: block;
  `,
}

type ResponsiveImageProps = Omit<ImageProps, 'src'> & {
  className?: string
  src: ResponsiveImageSrc
  alt: string
}

export const ResponsiveImage = ({ className = '', src, alt, ...rest }: ResponsiveImageProps) => (
  <S.ResponsiveImage className={className}>
    <source media={theme.breakPoints.mobile} srcSet={src.mobile} />
    <source media={theme.breakPoints.desktop} srcSet={src.desktop} />
    <source media={theme.breakPoints.tabletPortrait} srcSet={src.tablet} />
    <Image className="image" {...rest} src={src.desktop} alt={alt} />
  </S.ResponsiveImage>
)
