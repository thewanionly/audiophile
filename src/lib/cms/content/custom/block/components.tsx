'use client'

import { theme } from '@/styles'
import styled from '@emotion/styled'

const S = {
  PrimaryDecoratorIcon: styled.span`
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.primary};
  `,
  PrimaryDecoratorComponent: styled.span`
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.primary};
  `,
}

export const PrimaryDecoratorIcon = () => <S.PrimaryDecoratorIcon>P</S.PrimaryDecoratorIcon>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PrimaryDecoratorComponent = ({ children }: { children: any }) => (
  <S.PrimaryDecoratorComponent>{children}</S.PrimaryDecoratorComponent>
)
