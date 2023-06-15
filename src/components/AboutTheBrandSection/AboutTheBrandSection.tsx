'use client'

import styled from '@emotion/styled'

import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  AboutTheBrandSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}
  `,
  BrandTextContainer: styled.div`
    text-align: center;
    max-width: 57.3rem;
    margin: 0 auto;
    margin-top: 4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 6.3rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      text-align: start;
      margin: 0;
      max-width: unset;
    }
  `,
  BrandHeading: styled.h2`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 3.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    margin-bottom: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      line-height: 4.4rem;
      letter-spacing: 0.143rem;
    }
  `,
  BrandDescription: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
}

type AboutTheBrandSectionProps = {
  className?: string
  heading: string
  description: string
}

export const AboutTheBrandSection = ({
  className = '',
  heading,
  description,
}: AboutTheBrandSectionProps) => {
  return (
    <S.AboutTheBrandSection className={className}>
      <S.BrandTextContainer>
        <S.BrandHeading>{heading}</S.BrandHeading>
        <S.BrandDescription>{description}</S.BrandDescription>
      </S.BrandTextContainer>
    </S.AboutTheBrandSection>
  )
}
