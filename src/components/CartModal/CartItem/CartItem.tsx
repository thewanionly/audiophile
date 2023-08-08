'use client'

import Link from 'next/link'

import styled from '@emotion/styled'

import { ResponsiveImage } from '@/components/ResponsiveImage'
import { formatPrice } from '@/utils/helpers'

const S = {
  CartItem: styled.article`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  `,
  ProductDetails: styled.div`
    display: grid;
    column-gap: 1.6rem;
  `,
  ProductImage: styled(ResponsiveImage)`
    grid-area: 1 / 1 / 3 / 2;

    width: 6.4rem;
    height: 6.4rem;
    position: relative;

    .image {
      border-radius: 0.8rem;
    }
  `,
  ProductShortName: styled.span`
    grid-area: 1 / 2 / 2 / 3;
    align-self: flex-end;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.darkTitle};
  `,
  ProductPrice: styled.span`
    grid-area: 2 / 2 / 3 / 3;
    align-self: flex-start;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm2};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
}

type CartItemProps = {
  image: ResponsiveImageType
  name: string
  slug: string
  category: string
  price: number
  quantity: number
}

export const CartItem = ({ image, name, slug, category, price, quantity }: CartItemProps) => {
  return (
    <S.CartItem>
      <S.ProductDetails>
        <S.ProductImage src={image.src} alt={image.alt} fill />
        <S.ProductShortName>{name}</S.ProductShortName>
        <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
      </S.ProductDetails>
    </S.CartItem>
  )
}
