'use client'

import { appSectionContainer, mediaQuery } from '@/styles/utils'
import styled from '@emotion/styled'

import { IN_THE_BOX_SECTION_HEADING } from '../../utils/constants'

const S = {
  InTheBoxSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 8.8rem auto 12.1rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 12rem auto;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
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
