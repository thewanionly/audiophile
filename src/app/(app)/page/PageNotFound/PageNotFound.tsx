'use client'

import Image from 'next/image'

import styled from '@emotion/styled'

import { appSectionContainer, mediaQuery } from '@/styles/utils'
import {
  NOT_FOUND_ALT_TEXT,
  NOT_FOUND_IMG_SRC,
  NOT_FOUND_PRIMARY_MESSAGE,
  NOT_FOUND_SECONDARY_MESSAGE,
} from '@/utils/constants'

const S = {
  PageNotFound: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    padding: 10rem 0;
    text-align: center;
  `,

  PageNotFoundImageContainer: styled.div`
    margin: 3rem auto 5rem;
    position: relative;

    width: 50%;
    min-width: 24rem;
    aspect-ratio: 1.2;
  `,
  PageNotFoundImage: styled(Image)``,
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

export const PageNotFound = () => {
  return (
    <S.PageNotFound>
      <S.PageNotFoundImageContainer>
        <S.PageNotFoundImage src={NOT_FOUND_IMG_SRC} alt={NOT_FOUND_ALT_TEXT} fill />
      </S.PageNotFoundImageContainer>
      <S.PrimaryMessage>{NOT_FOUND_PRIMARY_MESSAGE}</S.PrimaryMessage>
      <S.SecondaryMessage>{NOT_FOUND_SECONDARY_MESSAGE}</S.SecondaryMessage>
    </S.PageNotFound>
  )
}
