'use client'

import { useState } from 'react'

import Link from 'next/link'

import styled from '@emotion/styled'

import { InputStepper } from '@/components/InputStepper'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { useCartActions } from '@/store/cart'
import { MIN_QUANTITY } from '@/utils/constants'
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
  ProductImageLink: styled(Link)`
    grid-area: 1 / 1 / 3 / 2;
  `,
  ProductImage: styled(ResponsiveImage)`
    width: 6.4rem;
    height: 6.4rem;
    position: relative;

    .image {
      border-radius: 0.8rem;
    }
  `,
  ProductShortNameLink: styled(Link)`
    grid-area: 1 / 2 / 2 / 3;
    align-self: flex-end;

    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
  `,
  ProductShortName: styled.span`
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
  ProductQuantityStepper: styled(InputStepper)`
    flex-shrink: 0;
    align-self: center;

    width: 9.6rem;
    padding: 0.7rem 1.15rem;
  `,
}

type CartItemProps = {
  image: ResponsiveImageType
  name: string
  slug: string
  category: string
  price: number
  quantity: number
  closeModal: () => void
}

export const CartItem = ({
  image,
  name,
  slug,
  category,
  price,
  quantity,
  closeModal,
}: CartItemProps) => {
  const [qtyValue, setQtyValue] = useState(quantity)
  const { updateItemQuantity } = useCartActions()

  const productHref = `/${category}/${slug}`

  const handleUpdateQuantity = (value: number) => {
    setQtyValue(value)
    updateItemQuantity(slug, value)
  }

  return (
    <S.CartItem>
      <S.ProductDetails>
        <S.ProductImageLink href={productHref} onClick={closeModal}>
          <S.ProductImage src={image.src} alt={image.alt} fill />
        </S.ProductImageLink>
        <S.ProductShortNameLink href={productHref} onClick={closeModal}>
          <S.ProductShortName>{name}</S.ProductShortName>
        </S.ProductShortNameLink>
        <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
      </S.ProductDetails>
      <S.ProductQuantityStepper
        value={qtyValue}
        min={MIN_QUANTITY}
        onChange={handleUpdateQuantity}
      />
    </S.CartItem>
  )
}
