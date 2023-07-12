'use client'

import styled from '@emotion/styled'

import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { YOU_MAY_ALSO_LIKE } from '../../utils/constants'
import { SuggestedProductList } from './SuggestedProductList'

const S = {
  YouMayAlsoLikeSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 12rem auto;
  `,
  YouMayAlsoLikeHeading: styled.h2`
    margin-bottom: 4rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med2};
    line-height: 3.6rem;
    letter-spacing: 0.0857rem;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 5.6rem;

      font-size: ${({ theme }) => theme.fontSizes.lg1};
      letter-spacing: 0.1143rem;
    }
  `,
}

type YouMayAlsoLikeSectionProps = {
  data: SuggestedProduct[]
}

export const YouMayAlsoLikeSection = ({ data }: YouMayAlsoLikeSectionProps) => {
  return (
    <S.YouMayAlsoLikeSection>
      <S.YouMayAlsoLikeHeading>{YOU_MAY_ALSO_LIKE}</S.YouMayAlsoLikeHeading>
      <SuggestedProductList data={data} />
    </S.YouMayAlsoLikeSection>
  )
}
