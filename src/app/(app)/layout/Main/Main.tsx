'use client'

import styled from '@emotion/styled'

import { mediaQuery } from '@/styles/utils'

const S = {
  Main: styled.main`
    padding-top: 8.9rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding-top: 9.6rem;
    }
  `,
}

export const Main = ({ children }: { children: React.ReactNode }) => <S.Main>{children}</S.Main>
