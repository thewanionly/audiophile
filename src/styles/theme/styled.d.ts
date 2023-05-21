import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      appBg: string
      headerBg: string
      heroSectionBg: string
      categoryTitleSectionBg: string
      footerBg: string

      primaryButtonMain: string
      primaryButtonLighter: string
      neutralButtonMain: string
      neutralButtonLighter: string

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
      mobile: string
      tabletPortrait: string
      tabletLandscape: string
      desktop: string
      desktopLarge: string
    }
  }
}
