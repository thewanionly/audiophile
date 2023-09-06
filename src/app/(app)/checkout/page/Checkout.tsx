'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import styled from '@emotion/styled'

import { Button, ButtonVariant, EmptyCart, Loading } from '@/components'
import { OrderSummary as OrderSummaryType } from '@/services/checkout'
import { useCartActions, useCartState } from '@/store/cart'
import { useIsStoreHydrated } from '@/store/hydration'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { CHECKOUT, GO_BACK } from '@/utils/constants'

import { CheckoutProvider } from './Checkout.context'
import { CheckoutForm } from './CheckoutForm/CheckoutForm'
import { OrderConfirmationModal } from './OrderConfirmationModal'
import { OrderSummary } from './OrderSummary'

const S = {
  CheckoutContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      display: grid;
      column-gap: 3rem;
      grid-template-columns: 2fr 1fr;
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
  EmptyCart: styled(EmptyCart)`
    ${({ theme }) => appSectionContainer(theme)}
    margin: 9.7rem auto;

    .empty-cart__primary-message {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: ${({ theme }) => theme.fontSizes.med2};
      line-height: normal;
      letter-spacing: 0.1rem;
      color: ${({ theme }) => theme.colors.darkTitle};

      ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
        margin-top: 8rem;

        font-size: ${({ theme }) => theme.fontSizes.lg1};
        line-height: 3.6rem;
        letter-spacing: 0.1143rem;
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 11.6rem;
    }
  `,
  EmptyCartActionMessage: styled.p`
    margin-top: 2rem;

    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm2};
    line-height: 2.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.bodyTextDark};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.regular};
    }
  `,
  HomePageLink: styled(Link)`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm2};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyLinkText};

    &:hover {
      text-decoration: underline;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.regular};
    }
  `,
}

export const Checkout = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [order, setOrder] = useState<OrderSummaryType>()
  const { isEmpty } = useCartState()
  const isHydrated = useIsStoreHydrated()
  const { removeAllItems } = useCartActions()
  const router = useRouter()

  const showLoadingState = !isHydrated
  const showEmptyState = isHydrated && isEmpty
  const showCheckoutContent = isHydrated && !isEmpty

  const handleGoBack = () => {
    router.back()
  }

  const handleOpenOrderConfirmationModal = (order: OrderSummaryType) => {
    // Open modal
    setShowConfirmationModal(true)

    // Set order
    setOrder(order)
  }

  const handleCloseOrderConfirmationModal = () => {
    // Remove all cart items
    removeAllItems()

    // Close modal
    setShowConfirmationModal(false)
  }

  return (
    <CheckoutProvider>
      {showLoadingState && <Loading />}

      {showEmptyState && (
        <S.EmptyCart
          actionMessage={
            <S.EmptyCartActionMessage>
              Browse our store and find products you like,{' '}
              <S.HomePageLink href="/">start shopping now</S.HomePageLink>!
            </S.EmptyCartActionMessage>
          }
        />
      )}

      {showCheckoutContent && (
        <S.CheckoutContainer>
          <S.BackButtonContainer>
            <S.BackButton variant={ButtonVariant.TERTIARY} onClick={handleGoBack}>
              {GO_BACK}
            </S.BackButton>
          </S.BackButtonContainer>
          <S.CheckoutSection>
            <S.CheckoutHeading>{CHECKOUT}</S.CheckoutHeading>
            <CheckoutForm openConfirmationModal={handleOpenOrderConfirmationModal} />
          </S.CheckoutSection>
          <S.OrderSummary />
          {order && (
            <OrderConfirmationModal
              order={order}
              open={showConfirmationModal}
              onClose={handleCloseOrderConfirmationModal}
            />
          )}
        </S.CheckoutContainer>
      )}
    </CheckoutProvider>
  )
}
