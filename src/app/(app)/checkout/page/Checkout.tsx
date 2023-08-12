'use client'

import { useRouter } from 'next/navigation'

import styled from '@emotion/styled'

import { Button, ButtonVariant } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { GO_BACK } from '@/utils/constants'

const S = {
  BackButtonContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 1.6rem auto 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 4.8rem auto 2.4rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 7.9rem auto 3.8rem;
    }
  `,
  BackButton: styled(Button)`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    letter-spacing: normal;
  `,
}

export const Checkout = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <>
      <S.BackButtonContainer>
        <S.BackButton variant={ButtonVariant.TERTIARY} onClick={handleGoBack}>
          {GO_BACK}
        </S.BackButton>
      </S.BackButtonContainer>
    </>
  )
}
