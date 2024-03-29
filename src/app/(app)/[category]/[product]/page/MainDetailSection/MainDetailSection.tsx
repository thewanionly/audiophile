'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'

import { Button } from '@/components/Button'
import { InputStepper } from '@/components/InputStepper'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { useCartActions } from '@/store/cart'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { MIN_QUANTITY, NEW_PRODUCT } from '@/utils/constants'
import { formatPrice } from '@/utils/helpers'

import { ADD_TO_CART } from '../../utils/constants'

const S = {
  MainDetailSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 2.4rem;
    margin-bottom: 8.8rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 12rem;

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 6.95rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 5.6rem;
      margin-bottom: 16rem;

      justify-content: space-between;
      gap: 10rem;
    }
  `,
  ProductImage: styled(ResponsiveImage)`
    position: relative;
    height: min(32.7rem, 87vw);
    width: 100%;
    background-color: ${({ theme }) => theme.colors.imageBg};
    border-radius: 0.8rem;

    .image {
      border-radius: 0.8rem;
      object-fit: contain;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-basis: 40%;
      width: 45%;
      height: min(48rem, 50vw);
      background-color: transparent;

      .image {
        object-fit: cover;
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-basis: 50%;
      width: 55%;
      height: min(56rem, 42vw);

      .image {
        object-fit: cover;
      }
    }
  `,
  ContentContainer: styled.div`
    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-basis: 60%;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-basis: 50%;
    }
  `,
  ProductNewText: styled.span`
    display: block;
    margin-bottom: 2.4rem;

    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm2};
    line-height: normal;
    letter-spacing: 1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 1.6rem;
    }
  `,
  ProductName: styled.h1`
    margin-bottom: 2.4rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    line-height: normal;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      line-height: 3.2rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-bottom: 3.2rem;

      font-size: ${({ theme }) => theme.fontSizes.lg3};
      line-height: 4.4rem;
      letter-spacing: 0.1429rem;
    }
  `,
  ProductDescription: styled.p`
    margin-bottom: 2.4rem;

    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 3.2rem;
    }
  `,
  ProductPrice: styled.span`
    display: block;
    margin-bottom: 3.1rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med1};
    line-height: normal;
    letter-spacing: 0.1286rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.price};

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-bottom: 4.7rem;
    }
  `,
  AddToCartContainer: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
  AddToCartButton: styled(Button)`
    display: grid;
    align-items: center;
    justify-items: center;
  `,
  AddToCartButtonLabel: styled.span`
    grid-area: 1 / 1 / 2 / 2;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    letter-spacing: 0.1rem;
    line-height: normal;
    text-transform: uppercase;
  `,
  LoadingSpinner: styled(CircularProgress)`
    grid-area: 1 / 1 / 2 / 2;
    color: ${({ theme }) => theme.colors.secondary};
  `,
}

type MainDetailSectionProps = MainProductDetail

export const MainDetailSection = ({
  name,
  image,
  new: isNew,
  description,
  price,
  slug,
}: MainDetailSectionProps) => {
  const [isCartAdding, setIsCartAdding] = useState(false)
  const [quantity, setQuantity] = useState(MIN_QUANTITY)
  const { addItem } = useCartActions()

  const handleAddToCart = async () => {
    setIsCartAdding(true)

    try {
      await addItem(slug, quantity)
      toast.success('Added item to cart')
    } catch (error) {
      toast.error(`There's a problem adding item to cart`)
    } finally {
      setIsCartAdding(false)
    }
  }

  return (
    <S.MainDetailSection data-testid="main-detail-section">
      <S.ProductImage src={image.src} alt={image.alt} fill priority />
      <S.ContentContainer>
        {isNew ? <S.ProductNewText>{NEW_PRODUCT}</S.ProductNewText> : null}
        <S.ProductName>{name}</S.ProductName>
        <S.ProductDescription>{description}</S.ProductDescription>
        <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
        <S.AddToCartContainer>
          <InputStepper
            value={quantity}
            min={MIN_QUANTITY}
            onChange={(value: number) => setQuantity(value)}
          />
          <S.AddToCartButton onClick={handleAddToCart} isLoading={isCartAdding}>
            <S.AddToCartButtonLabel>{ADD_TO_CART}</S.AddToCartButtonLabel>
            {isCartAdding && <S.LoadingSpinner size={21} />}
          </S.AddToCartButton>
        </S.AddToCartContainer>
      </S.ContentContainer>
    </S.MainDetailSection>
  )
}
