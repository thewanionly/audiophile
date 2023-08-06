import { Theme } from '@emotion/react'
import { rgba } from 'polished'

import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '@/styles/variables'

export const theme: Theme = {
  colors: {
    // Global
    appBg: COLORS.alabaster,
    primary: COLORS.rawSienna,
    primaryLight: COLORS.hitPink,
    textOnPrimary: COLORS.white,
    secondary: COLORS.black,
    secondaryLight: COLORS.liver,
    textOnSecondaryContained: COLORS.white,
    textOnSecondaryOutlined: COLORS.black,
    darkTitle: COLORS.black,
    lightTitle: COLORS.white,
    bodyTextLight: rgba(COLORS.white, 0.5),
    bodyTextLighter: rgba(COLORS.white, 0.75),
    bodyTextDark: rgba(COLORS.black, 0.5),

    // Button
    buttonTertiary: rgba(COLORS.black, 0.5),
    buttonTertiaryHover: COLORS.rawSienna,
    buttonTertiaryDisabled: rgba(COLORS.black, 0.3),

    // Input Stepper
    inputStepper: COLORS.seaShell,
    stepperButton: rgba(COLORS.black, 0.35),
    stepperButtonDisabled: rgba(COLORS.black, 0.15),

    // Modal
    modalBg: COLORS.white,

    // Header
    headerBg: COLORS.black,
    headerHeroBg: COLORS.codGray,
    navLink: COLORS.white,
    navLinkHover: COLORS.rawSienna,
    menuIcon: COLORS.white,
    headerDivider: rgba(COLORS.white, 0.1),
    cartIcon: COLORS.white,

    categoryCardBg: COLORS.seaShell,
    categoryCardLink: rgba(COLORS.black, 0.5),

    // Home
    heroSectionBg: COLORS.codGray,
    tertiaryFPSectionBg: COLORS.seaShell,

    // Footer
    footerBg: COLORS.onyx,
    footerSocials: COLORS.white,

    // CLP
    categoryHeaderBg: COLORS.black,

    // PDP
    imageBg: COLORS.seaShell,
    price: COLORS.black,

    fieldError: COLORS.persianRed,
  },
  fontSizes: {
    xs: TYPOGRAPHY.fontSizeXs,
    sm1: TYPOGRAPHY.fontSizeSm1,
    sm2: TYPOGRAPHY.fontSizeSm2,
    regular: TYPOGRAPHY.fontSizeRegular,
    med1: TYPOGRAPHY.fontSizeMed1,
    med2: TYPOGRAPHY.fontSizeMed2,
    med3: TYPOGRAPHY.fontSizeMed3,
    lg1: TYPOGRAPHY.fontSizeLg1,
    lg2: TYPOGRAPHY.fontSizeLg2,
    lg3: TYPOGRAPHY.fontSizeLg3,
    xl: TYPOGRAPHY.fontSizeXl,
  },
  fontWeights: {
    regular: TYPOGRAPHY.fontWeightRegular,
    medium: TYPOGRAPHY.fontWeightMedium,
    bold: TYPOGRAPHY.fontWeightBold,
  },
  breakPoints: {
    mobile: BREAKPOINTS.mobile,
    tabletPortrait: BREAKPOINTS.tabletPortrait,
    tabletLandscape: BREAKPOINTS.tabletLandscape,
    desktop: BREAKPOINTS.desktop,
    desktopLarge: BREAKPOINTS.desktopLarge,
  },
}
