'use client'

import { Button } from '@/components/Button'
import { mediaQuery } from '@/styles/utils'
import { NEW_PRODUCT, SEE_PRODUCT } from '@/utils/constants'
import styled from '@emotion/styled'

const S = {
  CategoryProductCard: styled.article``,
  ContentContainer: styled.div`
    max-width: 57.2rem;
    text-align: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      text-align: start;
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
  name: string
  description: string
  isNew: boolean
  category: string
  slug: string
}

export const CategoryProductCard = ({
  name,
  description,
  isNew,
  category,
  slug,
}: CategoryProductCardProps) => {
  return (
    <S.CategoryProductCard>
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
