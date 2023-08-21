'use client'

import { useRouter } from 'next/navigation'

import styled from '@emotion/styled'

import { Button, ButtonVariant } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { CHECKOUT, GO_BACK } from '@/utils/constants'

import { CheckoutForm } from './CheckoutForm/CheckoutForm'
import { OrderSummary } from './OrderSummary'

const S = {
  CheckoutContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      display: grid;
      column-gap: 3rem;
      grid-template-columns: 2fr 1fr;
      /* grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr); */
    }
  `,
  BackButtonContainer: styled.div`
    margin: 1.6rem 0 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 4.8rem 0 2.4rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 7.9rem 0 3.8rem;
      grid-area: 1 / 1 / 2 / 3;
    }
  `,
  BackButton: styled(Button)`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    letter-spacing: normal;
  `,
  CheckoutSection: styled.section`
    background-color: ${({ theme }) => theme.colors.checkoutSectionBg};
    border-radius: 0.8rem;
    padding: 2.4rem;
    margin-bottom: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      padding: 3rem 2.8rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding: 5.4rem 4.8rem;
      grid-area: 2 / 1 / 3 / 2;
    }
  `,
  CheckoutHeading: styled.h1`
    margin-bottom: 3.2rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    line-height: normal;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.lg1};
      line-height: 3.6rem;
      letter-spacing: 0.1143rem;
    }
  `,
  OrderSummary: styled(OrderSummary)`
    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      grid-area: 2 / 2 / 3 / 3;
    }
  `,
}

export const Checkout = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <S.CheckoutContainer>
      <S.BackButtonContainer>
        <S.BackButton variant={ButtonVariant.TERTIARY} onClick={handleGoBack}>
          {GO_BACK}
        </S.BackButton>
      </S.BackButtonContainer>
      <S.CheckoutSection>
        <S.CheckoutHeading>{CHECKOUT}</S.CheckoutHeading>
        <CheckoutForm />
      </S.CheckoutSection>
      <S.OrderSummary />
    </S.CheckoutContainer>
  )
}
