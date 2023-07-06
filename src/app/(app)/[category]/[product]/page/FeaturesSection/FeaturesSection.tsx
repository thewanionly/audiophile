'use client'

import { appSectionContainer, mediaQuery } from '@/styles/utils'
import styled from '@emotion/styled'

import { FEATURES_SECTION_HEADING } from '../../utils/constants'

const S = {
  FeaturesSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 8.8rem auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 12rem auto;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
    }
  `,
  FeaturesHeading: styled.h2``,
  FeaturesBodyText: styled.p``,
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
