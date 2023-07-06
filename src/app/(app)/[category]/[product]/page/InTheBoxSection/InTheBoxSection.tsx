'use client'

import { mediaQuery } from '@/styles/utils'
import styled from '@emotion/styled'

import { IN_THE_BOX_SECTION_HEADING } from '../../utils/constants'

const S = {
  InTheBoxSection: styled.section`
    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      display: flex;
      gap: 6.95rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-basis: 35%;

      flex-direction: column;
      gap: 3.2rem;
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
      margin-bottom: 0;
      flex-basis: 40%;
      width: 45%;

      font-size: ${({ theme }) => theme.fontSizes.lg1};
      line-height: 3.6rem;
      letter-spacing: 0.1143rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      width: 100%;
      flex: 1;
    }
  `,
  InTheBoxList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-basis: 60%;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex: 1;
    }
  `,
  InTheBoxListItem: styled.li`
    display: flex;
    gap: 2.4rem;

    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
  `,
  InTheBoxItemQuantity: styled.span`
    width: 2rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      content: 'x';
    }
  `,
  InTheBoxItemName: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
}

type InTheBoxSectionProps = { data: Inclusion[] }

export const InTheBoxSection = ({ data }: InTheBoxSectionProps) => {
  return (
    <S.InTheBoxSection>
      <S.InTheBoxHeading>{IN_THE_BOX_SECTION_HEADING}</S.InTheBoxHeading>
      <S.InTheBoxList>
        {data.map(({ quantity, item }) => (
          <S.InTheBoxListItem key={item}>
            <S.InTheBoxItemQuantity>{quantity}</S.InTheBoxItemQuantity>
            <S.InTheBoxItemName>{item}</S.InTheBoxItemName>
          </S.InTheBoxListItem>
        ))}
      </S.InTheBoxList>
    </S.InTheBoxSection>
  )
}
