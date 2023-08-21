import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styled from '@emotion/styled'

import { Button, ButtonVariant, Icon, IconName } from '@/components'
import { InputStepper } from '@/components/InputStepper'
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
  ProductImageContainer: styled.div`
    position: relative;
    width: 6.4rem;
    height: 6.4rem;
  `,
  ProductImage: styled(Image)`
    border-radius: 0.8rem;
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
  ProductActions: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  ProductQuantityStepper: styled(InputStepper)`
    flex-shrink: 0;
    align-self: center;

    width: 9rem;
    padding: 0.7rem 1.15rem;
  `,
  DeleteIconButton: styled(Button)``,
  DeleteIcon: styled(Icon)`
    width: 1.5rem;
    height: 1.5rem;
  `,
  QuantityValue: styled.span`
    align-self: center;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
}

export type CartItemProps = {
  image: ResponsiveImageType
  name: string
  slug: string
  category: string
  price: number
  quantity: number
  onClick?: () => void
  withActions?: boolean
}

export const CartItem = ({
  image,
  name,
  slug,
  category,
  price,
  quantity,
  onClick,
  withActions = true,
}: CartItemProps) => {
  const [qtyValue, setQtyValue] = useState(quantity)
  const { updateItemQuantity, removeItem } = useCartActions()

  const productHref = `/${category}/${slug}`

  const handleUpdateQuantity = (value: number) => {
    setQtyValue(value)
    updateItemQuantity(slug, value)
  }

  return (
    <S.CartItem>
      <S.ProductDetails>
        <S.ProductImageLink href={productHref} onClick={onClick}>
          <S.ProductImageContainer>
            <S.ProductImage src={image.src.mobile} alt={image.alt} fill />
          </S.ProductImageContainer>
        </S.ProductImageLink>
        <S.ProductShortNameLink href={productHref} onClick={onClick}>
          <S.ProductShortName>{name}</S.ProductShortName>
        </S.ProductShortNameLink>
        <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
      </S.ProductDetails>
      {withActions ? (
        <S.ProductActions>
          <S.ProductQuantityStepper
            value={qtyValue}
            min={MIN_QUANTITY}
            onChange={handleUpdateQuantity}
          />
          <S.DeleteIconButton
            variant={ButtonVariant.TERTIARY}
            onClick={() => removeItem(slug)}
            aria-label="delete item"
          >
            <S.DeleteIcon name={IconName.Trash} />
          </S.DeleteIconButton>
        </S.ProductActions>
      ) : (
        <S.QuantityValue data-testid="quantity-value">x {quantity}</S.QuantityValue>
      )}
    </S.CartItem>
  )
}
