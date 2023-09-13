'use client'

// Error components must be Client Components
import { useEffect } from 'react'

import Image from 'next/image'

import styled from '@emotion/styled'

import { appSectionContainer, mediaQuery } from '@/styles/utils'
import {
  ERROR_ALT_TEXT,
  ERROR_IMG_SRC,
  ERROR_PRIMARY_MESSAGE,
  ERROR_SECONDARY_MESSAGE,
} from '@/utils/constants'

const S = {
  ErrorContainer: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    padding: 10rem 0;
    text-align: center;
  `,
  ErrorImageContainer: styled.div`
    margin: 3rem auto 5rem;
    position: relative;

    width: 50%;
    min-width: 24rem;
    aspect-ratio: 1.2;
  `,
  ErrorImage: styled(Image)``,
  PrimaryMessage: styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    line-height: 3.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};
    margin-bottom: 1.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.lg3};
      line-height: 4.4rem;
      letter-spacing: 0.143rem;
    }
  `,
  SecondaryMessage: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.med1};
      line-height: 2.5rem;
    }
  `,
}

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <S.ErrorContainer>
      <S.ErrorImageContainer>
        <S.ErrorImage src={ERROR_IMG_SRC} alt={ERROR_ALT_TEXT} fill />
      </S.ErrorImageContainer>
      <S.PrimaryMessage>{ERROR_PRIMARY_MESSAGE}</S.PrimaryMessage>
      <S.SecondaryMessage>{ERROR_SECONDARY_MESSAGE}</S.SecondaryMessage>
    </S.ErrorContainer>
  )
}
