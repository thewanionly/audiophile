'use client'

import styled from '@emotion/styled'

import { ResponsiveImage } from '@/components/ResponsiveImage'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  MainDetailSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 2.4rem;
    margin-bottom: 8.8rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 12rem;

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 6.95rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 5.6rem;
      margin-bottom: 16rem;

      justify-content: space-between;
      gap: 10rem;
    }
  `,
  ProductImage: styled(ResponsiveImage)`
    position: relative;
    height: min(32.7rem, 87vw);
    width: 100%;
    background-color: ${({ theme }) => theme.colors.imageBg};
    border-radius: 0.8rem;

    .image {
      border-radius: 0.8rem;
      object-fit: contain;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      width: 45%;
      height: min(48rem, 50vw);
      background-color: transparent;

      .image {
        object-fit: cover;
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      width: 55%;
      height: min(56rem, 42vw);

      .image {
        object-fit: cover;
      }
    }
  `,
  ProductName: styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    line-height: normal;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      line-height: 3.2rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      font-size: ${({ theme }) => theme.fontSizes.lg3};
      line-height: 4.4rem;
      letter-spacing: 0.1429rem;
    }
  `,
}

type MainDetailSectionProps = MainProductDetail

export const MainDetailSection = ({ name, image }: MainDetailSectionProps) => {
  return (
    <S.MainDetailSection>
      <S.ProductImage src={image.src} alt={image.alt} fill priority />
      <S.ProductName>{name}</S.ProductName>
    </S.MainDetailSection>
  )
}
