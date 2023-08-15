import { Theme, css } from '@emotion/react'

import { mediaQuery } from '@/styles/utils'

export const formSectionHeading = (theme: Theme) => css`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.sm1};
  line-height: 2.5rem;
  letter-spacing: 0.0929rem;
  text-transform: uppercase;
  color: ${theme.colors.primary};

  margin-bottom: 1.6rem;
`

export const formFieldsContainer = (_: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.6rem;
  row-gap: 2.4rem;
`

export const formInput = (theme: Theme) => css`
  width: 100%;

  ${mediaQuery(theme.breakPoints.tabletLandscape)} {
    width: calc((100% - 1.6rem) / 2);
  }
`
