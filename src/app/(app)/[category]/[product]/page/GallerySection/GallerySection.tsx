'use client'

import styled from '@emotion/styled'

import { appSectionContainer } from '@/styles/utils'
import { ResponsiveImage } from '@/components/ResponsiveImage'

const S = {
  GallerySection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 8.8rem auto 12.1rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,
  FirstImage: styled(ResponsiveImage)`
    position: relative;
    width: 100%;
    aspect-ratio: 1.88;

    .image {
      border-radius: 0.8rem;
      object-fit: contain;
    }
  `,
  SecondImage: styled(ResponsiveImage)`
    position: relative;
    width: 100%;
    aspect-ratio: 1.88;

    .image {
      border-radius: 0.8rem;
      object-fit: contain;
    }
  `,
  ThirdImage: styled(ResponsiveImage)`
    position: relative;
    width: 100%;
    aspect-ratio: 0.88;

    .image {
      border-radius: 0.8rem;
      object-fit: contain;
    }
  `,
}

type GallerySectionProps = { data: Gallery }

export const GallerySection = ({ data }: GallerySectionProps) => {
  return (
    <S.GallerySection data-testid="gallery-section">
      <S.FirstImage src={data.first.src} alt={data.first.alt} fill />
      <S.SecondImage src={data.second.src} alt={data.second.alt} fill />
      <S.ThirdImage src={data.third.src} alt={data.third.alt} fill />
    </S.GallerySection>
  )
}
