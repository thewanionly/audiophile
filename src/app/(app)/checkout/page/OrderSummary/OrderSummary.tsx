import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'

import { Button, CartItem } from '@/components'
import { useCartState } from '@/store/cart'
import { mediaQuery } from '@/styles/utils'

import { ORDER_SUMMARY, SUBMIT_BUTTON } from '../../utils/constants'
import { OrderComputationItem, getOrderComputations } from '../../utils/helpers'
import { useCheckoutContext } from '../Checkout.context'

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
  OrderSummaryComputation: styled.dl`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
  OrderSummaryComputationRow: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  OrderSummaryComputationRowLabel: styled.dt`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
  OrderSummaryComputationRowValue: styled.dd<{ isGrandTotal?: boolean }>`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med1};
    line-height: normal;
    text-transform: uppercase;
    color: ${({ theme, isGrandTotal }) =>
      isGrandTotal ? theme.colors.grandPrice : theme.colors.price};
  `,
  OrderSummaryGrandTotal: styled.dl`
    margin: 2.4rem 0 3.2rem;
  `,
  OrderSummarySubmitButton: styled(Button)`
    display: grid;
    align-items: center;
    justify-items: center;

    padding: 0 3rem;
    width: 100%;
    height: 4.8rem;
  `,
  OrderSummarySubmitButtonLabel: styled.span`
    grid-area: 1 / 1 / 2 / 2;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    letter-spacing: 0.1rem;
    line-height: normal;
    text-transform: uppercase;
  `,
  LoadingSpinner: styled(CircularProgress)`
    grid-area: 1 / 1 / 2 / 2;
    color: ${({ theme }) => theme.colors.secondary};
  `,
}

type OrderSummaryProps = {
  className?: string
}

type OrderSummaryComputationRowProps = OrderComputationItem & {
  isGrandTotal?: boolean
}

const OrderSummaryComputationRow = ({
  id,
  label,
  value,
  isGrandTotal = false,
}: OrderSummaryComputationRowProps) => (
  <S.OrderSummaryComputationRow key={id}>
    <S.OrderSummaryComputationRowLabel id={id}>{label}</S.OrderSummaryComputationRowLabel>
    <S.OrderSummaryComputationRowValue aria-labelledby={id} isGrandTotal={isGrandTotal}>
      {value}
    </S.OrderSummaryComputationRowValue>
  </S.OrderSummaryComputationRow>
)

export const OrderSummary = ({ className }: OrderSummaryProps) => {
  const { items, totalPrice } = useCartState()
  const { isCheckingOut } = useCheckoutContext()

  const { grandTotal, ...otherOrderComputation } = getOrderComputations(totalPrice)

  return (
    <S.OrderSummary className={className}>
      <S.OrderSummaryHeading>{ORDER_SUMMARY}</S.OrderSummaryHeading>
      <S.OrderSummaryCartItems>
        {items.map(({ product, quantity }) => (
          <li key={product.slug}>
            <CartItem
              image={product.image}
              name={product.shortName}
              slug={product.slug}
              category={product.category}
              price={product.price}
              quantity={quantity}
              withActions={false}
            />
          </li>
        ))}
      </S.OrderSummaryCartItems>
      <S.OrderSummaryComputation>
        {Object.values(otherOrderComputation).map((row) => (
          <OrderSummaryComputationRow key={row.id} {...row} />
        ))}
      </S.OrderSummaryComputation>
      <S.OrderSummaryGrandTotal>
        <OrderSummaryComputationRow key={grandTotal.id} {...grandTotal} isGrandTotal />
      </S.OrderSummaryGrandTotal>
      <S.OrderSummarySubmitButton type="submit" form="checkout-form" isLoading={isCheckingOut}>
        <S.OrderSummarySubmitButtonLabel>{SUBMIT_BUTTON}</S.OrderSummarySubmitButtonLabel>
        {isCheckingOut && <S.LoadingSpinner size={22} />}
      </S.OrderSummarySubmitButton>
    </S.OrderSummary>
  )
}
