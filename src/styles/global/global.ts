import { Theme, css } from '@emotion/react'

export const globalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    background-color: ${theme.other.colors.appBg};
    box-sizing: border-box;

    /**
     * Set root font-size to 10px.
     * Default browser font size is 16px and 62.5% of 16px is 10px
     * This makes 1rem = 10px.
     * We use percentage here so our root font size adapts if ever browser font setting is changed.
     * Source: https://www.aleksandrhovhannisyan.com/blog/62-5-percent-font-size-trick/
     */
    font-size: 62.5%;

    & * {
      font-size: ${theme.other.fontSizes.regular};
      font-weight: ${theme.other.fontWeights.regular};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    font-weight: ${theme.other.fontWeights.bold};
  }

  h1 {
    font-size: ${theme.other.fontSizes.xxxl};
    line-height: 5.8rem;
    letter-spacing: 0.2rem;
  }

  h2 {
    font-size: ${theme.other.fontSizes.xxl};
    line-height: 4.4rem;
    letter-spacing: 0.15rem;
  }

  h3 {
    font-size: ${theme.other.fontSizes.xl};
    line-height: 3.6rem;
    letter-spacing: 0.115rem;
  }

  h4 {
    font-size: ${theme.other.fontSizes.lg};
    line-height: 3.8rem;
    letter-spacing: 0.2rem;
  }

  h5 {
    font-size: ${theme.other.fontSizes.med2};
    line-height: 3.3rem;
    letter-spacing: 0.17rem;
  }

  h6 {
    font-size: ${theme.other.fontSizes.med1};
    line-height: 2.5rem;
    letter-spacing: 0.13rem;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
