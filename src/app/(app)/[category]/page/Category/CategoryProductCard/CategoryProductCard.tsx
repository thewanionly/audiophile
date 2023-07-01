'use client'

import styled from '@emotion/styled'

import { Button } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { mediaQuery } from '@/styles/utils'
import { NEW_PRODUCT, SEE_PRODUCT } from '@/utils/constants'

const S = {
  CategoryProductCard: styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      gap: 5.2rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-direction: row;
      justify-content: space-between;
      gap: 10rem;
    }
  `,
  ProductImage: styled(ResponsiveImage)`
    position: relative;
    height: 35.2rem;
    width: 100%;
    max-width: 35rem;

    .image {
      border-radius: 0.8rem;
      object-fit: cover;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      max-width: none;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 56rem;
      flex-basis: 50%;
    }
  `,
  ContentContainer: styled.div`
    max-width: 57.2rem;
    text-align: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      text-align: start;
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
  ProductName: styled.span`
    display: block;
    margin-bottom: 2.4rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    line-height: normal;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
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

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-bottom: 4rem;
    }
  `,
}

type CategoryProductCardProps = {
  className?: string
  name: string
  description: string
  isNew: boolean
  category: string
  slug: string
  image: ResponsiveImageType
}

export const CategoryProductCard = ({
  className = '',
  name,
  description,
  isNew,
  category,
  slug,
  image,
}: CategoryProductCardProps) => {
  return (
    <S.CategoryProductCard className={className}>
      <S.ProductImage src={image.src} alt={image.alt} fill />
      <S.ContentContainer>
        {isNew ? <S.ProductNewText>{NEW_PRODUCT}</S.ProductNewText> : null}
        <S.ProductName>{name}</S.ProductName>
        <S.ProductDescription>{description}</S.ProductDescription>
        <Button asLink href={`${category}/${slug}`}>
          {SEE_PRODUCT}
        </Button>
      </S.ContentContainer>
    </S.CategoryProductCard>
  )
}
