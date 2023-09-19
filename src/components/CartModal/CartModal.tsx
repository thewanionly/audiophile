import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styled from '@emotion/styled'
import MUIModal from '@mui/material/Modal'

import { Button, ButtonColor, ButtonVariant, EmptyCart } from '@/components'
import { useCartActions, useCartState } from '@/store/cart'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { CHECKOUT } from '@/utils/constants'
import { formatPrice } from '@/utils/helpers'

import { CartItem } from '../CartItem'

const S = {
  Modal: styled(MUIModal)`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 9rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 9.6rem;
    }
  `,
  ModalContent: styled.div`
    position: relative;
    margin: 2.4rem auto;
    background-color: ${({ theme }) => theme.colors.modalBg};
    border-radius: 0.8rem;
    padding: 3.2rem 2.8rem;
    max-width: 37.7rem;
    max-height: 49rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-right: 0;
    }
  `,
  CartHeader: styled.section`
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
  CartBody: styled.section`
    flex-shrink: 1;
    overflow: auto;
  `,
  CartItemList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  `,
  CartFooter: styled.section``,
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
  CheckoutButton: styled(Button)`
    margin-top: 2.4rem;

    width: 100%;
    text-align: center;
  `,
  EmptyCartActionMessage: styled.p`
    margin-top: 1.5rem;

    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    line-height: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
  HomePageLink: styled(Link)`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.bodyLinkText};

    &:hover {
      text-decoration: underline;
    }
  `,
  ConfirmDeletionOverlay: styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.deleteConfirmationOverlay};
    border-radius: 0.8rem;
  `,
  ConfirmDeletionContent: styled.div`
    position: absolute;
    bottom: 0;
    border-radius: 1.5rem 1.5rem 0.8rem 0.8rem;
    background-color: ${({ theme }) => theme.colors.deleteConfirmationContentBg};
    width: 100%;
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  ConfirmDeletionOverlayMessage: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med1};
    line-height: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkTitle};
  `,
  ConfirmDeletionOverlayButtonsContainer: styled.div`
    display: flex;
    gap: 1rem;
  `,
  ConfirmDeleteButton: styled(Button)`
    margin-top: 2rem;
    padding: 1rem 2rem;
  `,
}

type CartModalProps = {
  open: boolean
  closeModal: () => void
}

export const CartModal = ({ open = false, closeModal }: CartModalProps) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<Pick<Product, 'shortName' | 'slug'> | null>()
  const { items, totalItems, totalPrice } = useCartState()
  const { removeItem, removeAllItems } = useCartActions()

  const handleOnRemoveItemClick = (name: string, slug: string) => {
    setItemToDelete({ shortName: name, slug })
    setShowDeleteConfirmation(true)
  }

  const handleOnRemoveAllClick = () => {
    setItemToDelete(null)
    setShowDeleteConfirmation(true)
  }

  const resetDeleteState = () => {
    setItemToDelete(null)
    setShowDeleteConfirmation(false)
  }

  const handleModalClose = () => {
    resetDeleteState()
    closeModal()
  }

  const handleRemove = () => {
    if (itemToDelete) {
      removeItem(itemToDelete.slug)
    } else {
      removeAllItems()
    }

    resetDeleteState()
  }

  const handleKeepIt = () => {
    setShowDeleteConfirmation(false)
  }

  return (
    <S.Modal open={open} onClose={handleModalClose}>
      <S.ModalContent>
        <S.CartHeader>
          <S.CartTitle>
            Cart
            <span data-testid="cart-items-count">{` (${totalItems})`}</span>
          </S.CartTitle>
          {totalItems > 0 && (
            <S.RemoveAllButton variant={ButtonVariant.TERTIARY} onClick={handleOnRemoveAllClick}>
              Remove all
            </S.RemoveAllButton>
          )}
        </S.CartHeader>
        <S.CartBody>
          {totalItems > 0 ? (
            <S.CartItemList>
              {items.map(({ product, quantity }) => (
                <li key={product.slug}>
                  <CartItem
                    image={product.image}
                    name={product.shortName}
                    slug={product.slug}
                    category={product.category}
                    price={product.price}
                    quantity={quantity}
                    onClick={handleModalClose}
                    onRemove={handleOnRemoveItemClick}
                  />
                </li>
              ))}
            </S.CartItemList>
          ) : (
            <EmptyCart
              actionMessage={
                <S.EmptyCartActionMessage>
                  Browse our store and find products you like,{' '}
                  <S.HomePageLink href="/" onClick={handleModalClose}>
                    start shopping now
                  </S.HomePageLink>
                  !
                </S.EmptyCartActionMessage>
              }
            />
          )}
        </S.CartBody>
        {totalItems > 0 && (
          <S.CartFooter>
            <S.CartItemTotalPriceContainer>
              <S.CartItemTotalPriceLabel>Total</S.CartItemTotalPriceLabel>
              <S.CartItemTotalPriceValue data-testid="cart-items-total-amount">
                {formatPrice(totalPrice)}
              </S.CartItemTotalPriceValue>
            </S.CartItemTotalPriceContainer>
            <S.CheckoutButton asLink href="/checkout" onClick={handleModalClose}>
              {CHECKOUT}
            </S.CheckoutButton>
          </S.CartFooter>
        )}

        {showDeleteConfirmation && (
          <S.ConfirmDeletionOverlay>
            <S.ConfirmDeletionContent>
              <S.ConfirmDeletionOverlayMessage>
                Remove {itemToDelete ? `${itemToDelete?.shortName}` : 'all items'}?
              </S.ConfirmDeletionOverlayMessage>
              <S.ConfirmDeletionOverlayButtonsContainer>
                <S.ConfirmDeleteButton
                  variant={ButtonVariant.OUTLINED}
                  color={ButtonColor.SECONDARY}
                  onClick={handleKeepIt}
                >
                  Keep it
                </S.ConfirmDeleteButton>
                <S.ConfirmDeleteButton color={ButtonColor.SECONDARY} onClick={handleRemove}>
                  Remove
                </S.ConfirmDeleteButton>
              </S.ConfirmDeletionOverlayButtonsContainer>
            </S.ConfirmDeletionContent>
          </S.ConfirmDeletionOverlay>
        )}
      </S.ModalContent>
    </S.Modal>
  )
}
