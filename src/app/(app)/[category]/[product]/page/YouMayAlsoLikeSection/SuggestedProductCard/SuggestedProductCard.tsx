'use client'

import styled from '@emotion/styled'

const S = {
  SuggestedProductCard: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
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
      <S.ProductName>{name}</S.ProductName>
    </S.SuggestedProductCard>
  )
}
