'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
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
