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
      textOnSecondaryContained: string
      textOnSecondaryOutlined: string
      darkTitle: string
      lightTitle: string
      bodyTextLight: string
      bodyTextLighter: string
      bodyTextDark: string
      bodyLinkText: string
      loadingBg: string
      buttonTertiary: string
      buttonTertiaryHover: string
      buttonTertiaryDisabled: string
      inputBorder: string
      inputBg: string
      inputText: string
      inputLabel: string
      inputPlaceholder: string
      inputError: string
      radioButtonBg: string
      radioButtonDotDefault: string
      radioButtonDotChecked: string
      radioButtonBorder: string
      radioButtonBorderActive: string
      inputStepper: string
      stepperButton: string
      stepperButtonDisabled: string
      modalBg: string
      headerBg: string
      headerHeroBg: string
      navLink: string
      navLinkHover: string
      menuIcon: string
      headerDivider: string
      cartIcon: string
      categoryCardBg: string
      categoryCardLink: string
      heroSectionBg: string
      tertiaryFPSectionBg: string
      footerBg: string
      footerSocials: string
      categoryHeaderBg: string
      imageBg: string
      price: string
      grandPrice: string
      checkoutSectionBg: string
      orderSummaryBg: string
      orderedItemsBg: string
      orderedItemsSeparator: string
      grandTotalBg: string
      grandTotalValue: string
      toasterText: string
      toasterSuccessBg: string
      toasterErrorBg: string
    }
    fontSizes: {
      xs: string
      sm1: string
      sm2: string
      regular: string
      regular2: string
      med1: string
      med2: string
      med3: string
      lg1: string
      lg2: string
      lg3: string
      xl: string
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
