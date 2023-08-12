'use client'

import { useRouter } from 'next/navigation'

import styled from '@emotion/styled'

import { Button, ButtonVariant } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { GO_BACK } from '@/utils/constants'

const S = {
  BackButtonContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 1.6rem auto 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 4.8rem auto 2.4rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 7.9rem auto 3.8rem;
    }
  `,
  BackButton: styled(Button)`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    letter-spacing: normal;
  `,
  CheckoutSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    background-color: ${({ theme }) => theme.colors.checkoutSectionBg};
    border-radius: 0.8rem;
    padding: 2.4rem;
    margin-bottom: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      padding: 3rem 2.8rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding: 5.4rem 4.8rem;
    }
  `,
  CheckoutHeading: styled.h1`
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
}

export const Checkout = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <>
      <S.BackButtonContainer>
        <S.BackButton variant={ButtonVariant.TERTIARY} onClick={handleGoBack}>
          {GO_BACK}
        </S.BackButton>
      </S.BackButtonContainer>
      <S.CheckoutSection>
        <S.CheckoutHeading>Checkout</S.CheckoutHeading>
      </S.CheckoutSection>
    </>
  )
}
