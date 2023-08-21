import styled from '@emotion/styled'

import { Button, CartItem } from '@/components'
import { useCartState } from '@/store/cart'
import { mediaQuery } from '@/styles/utils'
import { formatPrice } from '@/utils/helpers'

import { ORDER_SUMMARY, SHIPPING_FEE, SUBMIT_BUTTON, VAT_PERCENTAGE } from '../../utils/constants'

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
    width: 100%;
  `,
}

type OrderSummaryProps = {
  className?: string
}

interface OrderComputationItem {
  id: string
  label: string
  value: string | ((price: number) => string)
}

type OrderSummaryComputationRowProps = OrderComputationItem & {
  totalPrice: number
  isGrandTotal?: boolean
}

export const ORDER_COMPUTATIONS: Record<string, OrderComputationItem> = {
  total: {
    id: 'total',
    label: 'Total',
    value: (price: number) => formatPrice(price),
  },
  shipping: {
    id: 'shipping',
    label: 'Shipping',
    value: formatPrice(SHIPPING_FEE),
  },
  vat: {
    id: 'vat',
    label: 'VAT (Included)',
    value: (price: number) => formatPrice(price * VAT_PERCENTAGE),
  },
  grandTotal: {
    id: 'grandTotal',
    label: 'Grand Total',
    value: (price: number) => formatPrice(price + SHIPPING_FEE),
  },
}

const OrderSummaryComputationRow = ({
  id,
  label,
  value,
  totalPrice,
  isGrandTotal = false,
}: OrderSummaryComputationRowProps) => (
  <S.OrderSummaryComputationRow key={id}>
    <S.OrderSummaryComputationRowLabel id={id}>{label}</S.OrderSummaryComputationRowLabel>
    <S.OrderSummaryComputationRowValue aria-labelledby={id} isGrandTotal={isGrandTotal}>
      {typeof value === 'function' ? value(totalPrice) : value}
    </S.OrderSummaryComputationRowValue>
  </S.OrderSummaryComputationRow>
)

export const OrderSummary = ({ className }: OrderSummaryProps) => {
  const { items, totalPrice } = useCartState()

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
      <S.OrderSummaryComputation>
        {Object.values(ORDER_COMPUTATIONS)
          .filter(({ id }) => id !== ORDER_COMPUTATIONS.grandTotal.id)
          .map((row) => (
            <OrderSummaryComputationRow key={row.id} {...row} totalPrice={totalPrice} />
          ))}
      </S.OrderSummaryComputation>
      <S.OrderSummaryGrandTotal>
        <OrderSummaryComputationRow
          key={ORDER_COMPUTATIONS.grandTotal.id}
          {...ORDER_COMPUTATIONS.grandTotal}
          totalPrice={totalPrice}
          isGrandTotal
        />
      </S.OrderSummaryGrandTotal>
      <S.OrderSummarySubmitButton type="submit" form="checkout-form">
        {SUBMIT_BUTTON}
      </S.OrderSummarySubmitButton>
    </S.OrderSummary>
  )
}
