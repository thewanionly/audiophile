import { ReactElement } from 'react'

import Image from 'next/image'

import styled from '@emotion/styled'

import {
  EMPTY_CART_ALT_TEXT,
  EMPTY_CART_IMG_SRC,
  EMPTY_CART_PRIMARY_MESSAGE,
} from './EmptyCart.utils'

const S = {
  EmptyCartContainer: styled.div``,
  EmptyCartImageContainer: styled.div`
    margin: 3rem auto 5rem;
    position: relative;

    width: 50%;
    min-width: 24rem;
    aspect-ratio: 1.2;
  `,
  EmptyCartImage: styled(Image)``,
  EmptyCartPrimaryMessage: styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med1};
    line-height: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkTitle};
  `,
}

type EmptyCartProps = {
  className?: string
  actionMessage?: string | ReactElement
}

export const EmptyCart = ({ className, actionMessage }: EmptyCartProps) => {
  return (
    <S.EmptyCartContainer className={className}>
      <S.EmptyCartImageContainer>
        <S.EmptyCartImage src={EMPTY_CART_IMG_SRC} alt={EMPTY_CART_ALT_TEXT} fill />
      </S.EmptyCartImageContainer>
      <S.EmptyCartPrimaryMessage className="empty-cart__primary-message">
        {EMPTY_CART_PRIMARY_MESSAGE}
      </S.EmptyCartPrimaryMessage>
      {actionMessage}
    </S.EmptyCartContainer>
  )
}
