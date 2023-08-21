import styled from '@emotion/styled'

import { Button } from '@/components'
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
  OrderSummarySubmitButton: styled(Button)`
    width: 100%;
  `,
}

type OrderSummaryProps = {
  className?: string
}

export const OrderSummary = ({ className }: OrderSummaryProps) => {
  return (
    <S.OrderSummary className={className}>
      <S.OrderSummaryHeading>{ORDER_SUMMARY}</S.OrderSummaryHeading>
      <S.OrderSummarySubmitButton type="submit" form="checkout-form">
        {SUBMIT_BUTTON}
      </S.OrderSummarySubmitButton>
    </S.OrderSummary>
  )
}
