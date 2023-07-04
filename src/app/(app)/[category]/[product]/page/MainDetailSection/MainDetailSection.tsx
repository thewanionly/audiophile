'use client'

import styled from '@emotion/styled'

import { ResponsiveImage } from '@/components/ResponsiveImage'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { NEW_PRODUCT } from '@/utils/constants'
import { formatPrice } from '@/utils/helpers'

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
      flex-basis: 40%;
      width: 45%;
      height: min(48rem, 50vw);
      background-color: transparent;

      .image {
        object-fit: cover;
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-basis: 50%;
      width: 55%;
      height: min(56rem, 42vw);

      .image {
        object-fit: cover;
      }
    }
  `,
  ContentContainer: styled.div`
    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-basis: 60%;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-basis: 50%;
    }
  `,
  ProductNewText: styled.span`
    display: block;
    margin-bottom: 2.4rem;

    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm2};
    line-height: normal;
    letter-spacing: 1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 1.6rem;
    }
  `,
  ProductName: styled.h1`
    margin-bottom: 2.4rem;

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
      margin-bottom: 3.2rem;

      font-size: ${({ theme }) => theme.fontSizes.lg3};
      line-height: 4.4rem;
      letter-spacing: 0.1429rem;
    }
  `,
  ProductDescription: styled.p`
    margin-bottom: 2.4rem;

    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 3.2rem;
    }
  `,
  ProductPrice: styled.span`
    display: block;
    margin-bottom: 3.1rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med1};
    line-height: normal;
    letter-spacing: 0.1286rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.price};

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-bottom: 4.7rem;
    }
  `,
}

type MainDetailSectionProps = MainProductDetail

export const MainDetailSection = ({
  name,
  image,
  new: isNew,
  description,
  price,
}: MainDetailSectionProps) => {
  return (
    <S.MainDetailSection>
      <S.ProductImage src={image.src} alt={image.alt} fill priority />
      <S.ContentContainer>
        {isNew ? <S.ProductNewText>{NEW_PRODUCT}</S.ProductNewText> : null}
        <S.ProductName>{name}</S.ProductName>
        <S.ProductDescription>{description}</S.ProductDescription>
        <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
      </S.ContentContainer>
    </S.MainDetailSection>
  )
}
