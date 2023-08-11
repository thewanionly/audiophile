import Image from 'next/image'

import styled from '@emotion/styled'
import MUIModal from '@mui/material/Modal'

import { Button, ButtonVariant } from '@/components'
import { useCartActions, useCartState } from '@/store/cart'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { formatPrice } from '@/utils/helpers'

import { CartItem } from './CartItem/CartItem'

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
  CartHeader: styled.section`
    margin-bottom: 3.1rem;

    display: flex;
    justify-content: space-between;
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
  RemoveAllButton: styled(Button)`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    letter-spacing: normal;
    color: ${({ theme }) => theme.colors.bodyTextDark};
    text-decoration: underline;
  `,
  CartBody: styled.section``,
  CartItemList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 3.2rem;
  `,
  CartItemTotalPriceContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  CartItemTotalPriceLabel: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
  CartItemTotalPriceValue: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med1};
    line-height: normal;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};
  `,
  EmptyCartContainer: styled.div``,
  EmptyCartImageContainer: styled.div`
    margin: 3rem auto;
    position: relative;

    width: 50%;
    aspect-ratio: 1.2;
  `,
  EmptyCartImage: styled(Image)``,
  EmptyCartMessage: styled.p`
    margin-top: 2rem;

    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
}

type CartModalProps = {
  open: boolean
  closeModal: () => void
}

export const CartModal = ({ open = false, closeModal }: CartModalProps) => {
  const { items, totalItems, totalPrice } = useCartState()
  const { removeAllItems } = useCartActions()

  const handleRemoveAllItems = () => {
    removeAllItems()
  }

  return (
    <S.Modal open={open}>
      <S.ModalContent>
        <S.CartHeader>
          <S.CartTitle>
            Cart
            <span data-testid="cart-items-count">{` (${totalItems})`}</span>
          </S.CartTitle>
          {totalItems > 0 && (
            <S.RemoveAllButton variant={ButtonVariant.TERTIARY} onClick={handleRemoveAllItems}>
              Remove all
            </S.RemoveAllButton>
          )}
        </S.CartHeader>
        <S.CartBody>
          {totalItems === 0 ? (
            <S.EmptyCartContainer>
              <S.EmptyCartImageContainer>
                <S.EmptyCartImage src="/icons/empty-cart.svg" alt="empty cart" fill />
              </S.EmptyCartImageContainer>
              <S.EmptyCartMessage>You have no items in your cart.</S.EmptyCartMessage>
            </S.EmptyCartContainer>
          ) : (
            <S.CartItemList>
              {items.map(({ product, quantity }) => (
                <li key={product.slug}>
                  <CartItem
                    image={product.image}
                    name={product.name}
                    slug={product.slug}
                    category={product.category}
                    price={product.price}
                    quantity={quantity}
                    closeModal={closeModal}
                  />
                </li>
              ))}
            </S.CartItemList>
          )}
          {totalItems > 0 && (
            <S.CartItemTotalPriceContainer>
              <S.CartItemTotalPriceLabel>Total</S.CartItemTotalPriceLabel>
              <S.CartItemTotalPriceValue data-testid="cart-items-total-amount">
                {formatPrice(totalPrice)}
              </S.CartItemTotalPriceValue>
            </S.CartItemTotalPriceContainer>
          )}
        </S.CartBody>
      </S.ModalContent>
    </S.Modal>
  )
}
