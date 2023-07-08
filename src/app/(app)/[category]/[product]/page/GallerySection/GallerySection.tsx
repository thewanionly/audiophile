'use client'

import styled from '@emotion/styled'

import { ResponsiveImage } from '@/components/ResponsiveImage'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  GallerySection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 8.8rem auto 12.1rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      display: grid;
      grid-template-columns: 40% 2fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 2rem;

      aspect-ratio: 1.875;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      gap: 3.2rem;
    }
  `,
  FirstImage: styled(ResponsiveImage)`
    position: relative;
    width: 100%;
    aspect-ratio: 1.88;

    .image {
      border-radius: 0.8rem;
      object-fit: cover;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      grid-area: 1 / 1 / span 1 / span 1;

      height: 100%;
      aspect-ratio: unset;
    }
  `,
  SecondImage: styled(ResponsiveImage)`
    position: relative;
    width: 100%;
    aspect-ratio: 1.88;

    .image {
      border-radius: 0.8rem;
      object-fit: cover;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      grid-area: 2 / 1 / span 1 / span 1;

      height: 100%;
      aspect-ratio: unset;
    }
  `,
  ThirdImage: styled(ResponsiveImage)`
    position: relative;
    width: 100%;
    aspect-ratio: 0.88;

    .image {
      border-radius: 0.8rem;
      object-fit: cover;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      grid-area: 1 / 2 / span 2 / span 1;

      height: 100%;
      aspect-ratio: unset;
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
