import styled from '@emotion/styled'
import MUIModal from '@mui/material/Modal'

import { Button, CartItem, Icon, IconName } from '@/components'
import { OrderSummary } from '@/services/checkout'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { formatPrice } from '@/utils/helpers'

import {
  BACK_TO_HOME,
  ORDER_CONFIRMATION_PRIMARY_MESSAGE,
  ORDER_CONFIRMATION_SECONDARY_MESSAGE,
} from '../../utils/constants'
import { getOrderComputations } from '../../utils/helpers'

const S = {
  OrderConfirmationModal: styled(MUIModal)`
    ${({ theme }) => appSectionContainer(theme)}

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  OrderConfirmationModalContent: styled.div`
    background-color: ${({ theme }) => theme.colors.modalBg};
    border-radius: 0.8rem;
    padding: 3.2rem;
    max-width: 54rem;
    margin: 0 auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      padding: 4.8rem;
    }
  `,
  CheckCircle: styled.div`
    border-radius: 50%;
    width: 6.4rem;
    height: 6.4rem;
    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.3rem;
  `,
  PrimaryMessage: styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med2};
    line-height: 2.8rem;
    letter-spacing: 0.0857rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    margin-bottom: 1.6rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.lg1};
      line-height: 3.6rem;
      letter-spacing: 0.1143rem;

      max-width: 28.4rem;
    }
  `,
  SecondaryMessage: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};

    margin-bottom: 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 3.3rem;
    }
  `,
  OrderSummarySection: styled.section`
    border-radius: 0.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      display: flex;
    }
  `,
  OrderedItemsContainer: styled.div`
    border-radius: 0.8rem 0.8rem 0 0;
    background-color: ${({ theme }) => theme.colors.orderedItemsBg};
    padding: 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      border-radius: 0.8rem 0 0 0.8rem;
      width: 55%;
    }
  `,
  OrderedItemsSeparator: styled.div`
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.orderedItemsSeparator};
  `,
  CartItem: styled(CartItem)`
    margin-bottom: 1.2rem;
  `,
  OtherItemsCount: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: normal;
    letter-spacing: -0.0214rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};

    text-align: center;
    margin-top: 1.2rem;
  `,
  GrandTotalContainer: styled.div`
    border-radius: 0 0 0.8rem 0.8rem;
    background-color: ${({ theme }) => theme.colors.grandTotalBg};
    padding: 1.5rem 2.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      border-radius: 0 0.8rem 0.8rem 0;
      width: 45%;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding: 1.5rem 3.2rem;
    }
  `,
  GrandTotalLabel: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyTextLight};
  `,
  GrandTotalValue: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med1};
    line-height: normal;
    color: ${({ theme }) => theme.colors.grandTotalValue};
  `,
  BackToHomeButton: styled(Button)`
    width: 100%;
    text-align: center;

    margin-top: 2.3rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 4.6rem;
    }
  `,
}

type OrderConfirmationModalProps = {
  order: OrderSummary
  open: boolean
  onClose: () => void
}

export const OrderConfirmationModal = ({
  order,
  open = false,
  onClose,
}: OrderConfirmationModalProps) => {
  const { items, total, grandTotal } = order

  const firstProduct = items[0]
  const otherItemsCount = items.length - 1

  const orderComputation = getOrderComputations(total)

  return (
    <S.OrderConfirmationModal open={open} onClose={onClose}>
      <S.OrderConfirmationModalContent>
        <S.CheckCircle>
          <Icon name={IconName.Check} />
        </S.CheckCircle>
        <S.PrimaryMessage>{ORDER_CONFIRMATION_PRIMARY_MESSAGE}</S.PrimaryMessage>
        <S.SecondaryMessage>{ORDER_CONFIRMATION_SECONDARY_MESSAGE}</S.SecondaryMessage>
        {firstProduct && total && (
          <S.OrderSummarySection>
            <S.OrderedItemsContainer>
              <S.CartItem
                image={firstProduct.product.image}
                name={firstProduct.product.shortName}
                slug={firstProduct.product.slug}
                category={firstProduct.product.category}
                price={firstProduct.product.price}
                quantity={firstProduct.quantity}
                withActions={false}
              />
              {otherItemsCount > 0 && (
                <>
                  <S.OrderedItemsSeparator />
                  <S.OtherItemsCount data-testid="other-items-count">
                    and {otherItemsCount} other item(s)
                  </S.OtherItemsCount>
                </>
              )}
            </S.OrderedItemsContainer>
            <S.GrandTotalContainer>
              <S.GrandTotalLabel id={orderComputation.grandTotal.id}>
                {orderComputation.grandTotal.label}
              </S.GrandTotalLabel>
              <S.GrandTotalValue aria-labelledby={orderComputation.grandTotal.id}>
                {formatPrice(grandTotal)}
              </S.GrandTotalValue>
            </S.GrandTotalContainer>
          </S.OrderSummarySection>
        )}
        <S.BackToHomeButton asLink href="/" onClick={onClose}>
          {BACK_TO_HOME}
        </S.BackToHomeButton>
      </S.OrderConfirmationModalContent>
    </S.OrderConfirmationModal>
  )
}
