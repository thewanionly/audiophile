'use client'

import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'

import { appSectionContainer } from '@/styles/utils'

const S = {
  LoadingContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 9.7rem auto;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  LoadingSpinner: styled(CircularProgress)`
    color: ${({ theme }) => theme.colors.primary};
  `,
}

export const Loading = () => (
  <S.LoadingContainer>
    <S.LoadingSpinner size={100} disableShrink />
  </S.LoadingContainer>
)
