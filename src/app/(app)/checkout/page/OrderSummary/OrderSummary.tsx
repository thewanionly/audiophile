import styled from '@emotion/styled'

import { Button, CartItem } from '@/components'
import { useCartState } from '@/store/cart'
import { mediaQuery } from '@/styles/utils'

import { ORDER_SUMMARY, SUBMIT_BUTTON } from '../../utils/constants'

const S = {
  OrderSummary: styled.section`
    background-color: ${({ theme }) => theme.colors.orderSummaryBg};
    border-radius: 0.8rem;
    padding: 3.2rem 2.4rem;
    margin-bottom: 9.7rem;
    height: min-content;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      padding: 3.2rem 3.3rem;
      margin-bottom: 11.6rem;
    }
  `,
  OrderSummaryHeading: styled.h2`
    margin-bottom: 3.1rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med1};
    line-height: normal;
    letter-spacing: 0.1286rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};
  `,
  OrderSummaryCartItems: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 3.2rem;
  `,
  OrderSummarySubmitButton: styled(Button)`
    width: 100%;
  `,
}

type OrderSummaryProps = {
  className?: string
}

export const OrderSummary = ({ className }: OrderSummaryProps) => {
  const { items } = useCartState()

  return (
    <S.OrderSummary className={className}>
      <S.OrderSummaryHeading>{ORDER_SUMMARY}</S.OrderSummaryHeading>
      <S.OrderSummaryCartItems>
        {items.map(({ product, quantity }) => (
          <li key={product.slug}>
            <CartItem
              image={product.image}
              name={product.name}
              slug={product.slug}
              category={product.category}
              price={product.price}
              quantity={quantity}
              withActions={false}
            />
          </li>
        ))}
      </S.OrderSummaryCartItems>
      <S.OrderSummarySubmitButton type="submit" form="checkout-form">
        {SUBMIT_BUTTON}
      </S.OrderSummarySubmitButton>
    </S.OrderSummary>
  )
}
