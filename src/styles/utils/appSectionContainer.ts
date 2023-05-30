import { Theme, css } from '@emotion/react'

import { mediaQuery } from './mediaQuery'

export const appSectionContainer = (theme: Theme) => css`
  width: 87.2%;
  max-width: 120rem;
  min-width: 24.5rem;
  margin: 0 auto;

  ${mediaQuery(theme.other.breakPoints.tabletLandscape)} {
    width: 89.7%;
  }

  ${mediaQuery(theme.other.breakPoints.desktop)} {
    width: 90%;
  }
`
