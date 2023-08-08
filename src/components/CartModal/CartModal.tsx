import styled from '@emotion/styled'
import MUIModal from '@mui/material/Modal'

import { useCartState } from '@/store/cart'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  Modal: styled(MUIModal)`
    ${({ theme }) => appSectionContainer(theme)}

    &,
    .MuiBackdrop-root {
      margin-top: 9rem;

      ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
        margin-top: 9.6rem;
      }
    }
  `,
  ModalContent: styled.div`
    margin: 2.4rem auto;
    background-color: ${({ theme }) => theme.colors.modalBg};
    border-radius: 0.8rem;
    padding: 3.2rem 2.8rem;

    max-width: 37.7rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-right: 0;
    }
  `,
  CartTitle: styled.h2`
    &,
    span {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: ${({ theme }) => theme.fontSizes.med1};
      line-height: normal;
      letter-spacing: 0.1286rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkTitle};
    }
  `,
}

type CartModalProps = {
  open: boolean
}

export const CartModal = ({ open = false }: CartModalProps) => {
  const { totalItems } = useCartState()

  return (
    <S.Modal open={open}>
      <S.ModalContent>
        <S.CartTitle>
          Cart
          <span data-testid="cart-items-count">{` (${totalItems})`}</span>
        </S.CartTitle>
      </S.ModalContent>
    </S.Modal>
  )
}
