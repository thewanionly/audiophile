import '@emotion/react'

import { BreakpointsValues } from '../variables'

declare module '@emotion/react' {
  export interface Theme extends MantineTheme {
    colors: {
      appBg: string
      primary: string
      primaryLight: string
      textOnPrimary: string
      secondary: string
      secondaryLight: string
      textOnSecondary: string
      darkTitle: string
      lightTitle: string
      bodyTextLight: string
      bodyTextLighter: string
      bodyTextDark: string
      modalBg: string
      headerBg: string
      navLink: string
      navLinkHover: string
      menuIcon: string
      headerDivider: string
      cartIcon: string
      categoryCardBg: string
      categoryCardLink: string
      heroSectionBg: string
      footerBg: string
      footerSocials: string
      categoryHeaderBg: string
      fieldError: string
    }
    fontSizes: {
      xs: string
      sm1: string
      sm2: string
      regular: string
      med1: string
      med2: string
      lg: string
      xl: string
      xxl: string
      xxxl: string
    }
    fontWeights: {
      regular: number
      medium: number
      bold: number
    }
    breakPoints: {
      mobile: BreakpointsValues
      tabletPortrait: BreakpointsValues
      tabletLandscape: BreakpointsValues
      desktop: BreakpointsValues
      desktopLarge: BreakpointsValues
    }
  }
}
