'use client'

import styled from '@emotion/styled'

import { mediaQuery } from '@/styles/utils'

import { FEATURES_SECTION_HEADING } from '../../utils/constants'

const S = {
  FeaturesSection: styled.section`
    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-basis: 55%;
    }
  `,
  FeaturesHeading: styled.h2`
    margin-bottom: 2.4rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med2};
    line-height: 3.6rem;
    letter-spacing: 0.0857rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 3.2rem;

      font-size: ${({ theme }) => theme.fontSizes.lg1};
      line-height: 3.6rem;
      letter-spacing: 0.1143rem;
    }
  `,
  FeaturesBodyText: styled.p`
    white-space: pre-wrap;

    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
}

type FeaturesSectionProps = { data: string }

export const FeaturesSection = ({ data }: FeaturesSectionProps) => {
  return (
    <S.FeaturesSection>
      <S.FeaturesHeading>{FEATURES_SECTION_HEADING}</S.FeaturesHeading>
      <S.FeaturesBodyText>{data}</S.FeaturesBodyText>
    </S.FeaturesSection>
  )
}
