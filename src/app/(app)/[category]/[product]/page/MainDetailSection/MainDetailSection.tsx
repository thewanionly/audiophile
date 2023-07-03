'use client'

import { appSectionContainer, mediaQuery } from '@/styles/utils'
import styled from '@emotion/styled'

const S = {
  MainDetailSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 2.4rem;
    margin-bottom: 8.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 12rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 5.6rem;
      margin-bottom: 16rem;
    }
  `,
  ProductName: styled.h1`
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
      font-size: ${({ theme }) => theme.fontSizes.lg3};
      line-height: 4.4rem;
      letter-spacing: 0.1429rem;
    }
  `,
}

type MainDetailSectionProps = MainProductDetail

export const MainDetailSection = ({ name }: MainDetailSectionProps) => {
  return (
    <S.MainDetailSection>
      <S.ProductName>{name}</S.ProductName>
    </S.MainDetailSection>
  )
}
