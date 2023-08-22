import styled from '@emotion/styled'
import MUIModal from '@mui/material/Modal'

import { Button, Icon, IconName } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import {
  BACK_TO_HOME,
  ORDER_CONFIRMATION_PRIMARY_MESSAGE,
  ORDER_CONFIRMATION_SECONDARY_MESSAGE,
} from '../../utils/constants'

const S = {
  OrderConfirmationModal: styled(MUIModal)`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 22.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 22.2rem;
    }
  `,
  OrderConfirmationModalContent: styled.div`
    background-color: ${({ theme }) => theme.colors.modalBg};
    border-radius: 0.8rem;
    padding: 3.2rem;
    max-width: 54rem;
    margin: 0 auto;
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
  open?: boolean
  closeConfirmationModal: () => void
}

export const OrderConfirmationModal = ({
  open = false,
  closeConfirmationModal,
}: OrderConfirmationModalProps) => {
  return (
    <S.OrderConfirmationModal open={open}>
      <S.OrderConfirmationModalContent>
        {/* TODO: Remove this button. For testing purposes only */}
        <span onClick={closeConfirmationModal}>X</span>
        <S.CheckCircle>
          <Icon name={IconName.Check} />
        </S.CheckCircle>
        <S.PrimaryMessage>{ORDER_CONFIRMATION_PRIMARY_MESSAGE}</S.PrimaryMessage>
        <S.SecondaryMessage>{ORDER_CONFIRMATION_SECONDARY_MESSAGE}</S.SecondaryMessage>
        <S.BackToHomeButton asLink href="/">
          {BACK_TO_HOME}
        </S.BackToHomeButton>
      </S.OrderConfirmationModalContent>
    </S.OrderConfirmationModal>
  )
}
