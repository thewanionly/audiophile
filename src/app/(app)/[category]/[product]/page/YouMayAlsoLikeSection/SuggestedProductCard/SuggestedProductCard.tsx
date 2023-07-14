'use client'

import styled from '@emotion/styled'

import { Button } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { mediaQuery } from '@/styles/utils'
import { SEE_PRODUCT } from '@/utils/constants'

const S = {
  SuggestedProductCard: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ProductImage: styled(ResponsiveImage)`
    margin-bottom: 3.2rem;

    position: relative;
    width: 100%;
    aspect-ratio: 2.725;

    .image {
      border-radius: 0.8rem;
      object-fit: cover;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 4rem;

      aspect-ratio: 0.7;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      aspect-ratio: 1.1;
    }
  `,
  ProductName: styled.span`
    display: block;
    margin-bottom: 3.2rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med2};
    line-height: normal;
    letter-spacing: 0.1714rem;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
}

type SuggestedProductCardProps = {
  name: string
  category: string
  slug: string
  image: ResponsiveImageType
}

export const SuggestedProductCard = ({
  name,
  category,
  slug,
  image,
}: SuggestedProductCardProps) => {
  return (
    <S.SuggestedProductCard data-testid="suggsted-product-card">
      <S.ProductImage src={image.src} alt={image.alt} fill />
      <S.ProductName>{name}</S.ProductName>
      <Button asLink href={`${category}/${slug}`}>
        {SEE_PRODUCT}
      </Button>
    </S.SuggestedProductCard>
  )
}
