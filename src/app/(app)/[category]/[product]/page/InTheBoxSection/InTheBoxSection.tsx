'use client'

import { mediaQuery } from '@/styles/utils'
import styled from '@emotion/styled'

import { IN_THE_BOX_SECTION_HEADING } from '../../utils/constants'

const S = {
  InTheBoxSection: styled.section`
    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-basis: 35%;
    }
  `,
  InTheBoxHeading: styled.h2`
    margin-bottom: 2.4rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med2};
    line-height: 3.6rem;
    letter-spacing: 0.0857rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.lg1};
      line-height: 3.6rem;
      letter-spacing: 0.1143rem;
    }
  `,
}

type InTheBoxSectionProps = { data: Inclusion[] }

export const InTheBoxSection = ({ data }: InTheBoxSectionProps) => {
  return (
    <S.InTheBoxSection>
      <S.InTheBoxHeading>{IN_THE_BOX_SECTION_HEADING}</S.InTheBoxHeading>
    </S.InTheBoxSection>
  )
}
