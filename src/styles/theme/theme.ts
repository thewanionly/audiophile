import { Theme } from '@emotion/react'
import { rgba } from 'polished'

import { BREAKPOINTS, COLORS, TYPOGRAPHY } from '@/styles/variables'

export const theme: Theme = {
  colors: {
    // Global
    appBg: COLORS.alabaster,
    primary: COLORS.rawSienna,
    darkTitle: COLORS.black,
    lightTitle: COLORS.white,
    bodyLighterText: rgba(COLORS.white, 0.5),

    // Modal
    modalBg: COLORS.white,

    // Header
    headerBg: COLORS.black,
    navLink: COLORS.white,
    navLinkHover: COLORS.rawSienna,
    menuIcon: COLORS.white,
    headerDivider: rgba(COLORS.white, 0.1),
    cartIcon: COLORS.white,

    categoryCardBg: COLORS.seaShell,
    categoryCardLink: rgba(COLORS.black, 0.5),

    heroSectionBg: COLORS.onyx,

    // Footer
    footerBg: COLORS.onyx,
    footerSocials: COLORS.white,

    // CLP
    categoryHeaderBg: COLORS.black,

    primaryButtonMain: COLORS.rawSienna,
    primaryButtonLighter: COLORS.hitPink,
    neutralButtonMain: COLORS.black,
    neutralButtonLighter: COLORS.liver,

    fieldError: COLORS.persianRed,
  },
  fontSizes: {
    xs: TYPOGRAPHY.fontSizeXs,
    sm1: TYPOGRAPHY.fontSizeSm1,
    sm2: TYPOGRAPHY.fontSizeSm2,
    regular: TYPOGRAPHY.fontSizeRegular,
    med1: TYPOGRAPHY.fontSizeMed1,
    med2: TYPOGRAPHY.fontSizeMed2,
    lg: TYPOGRAPHY.fontSizeLg,
    xl: TYPOGRAPHY.fontSizeXl,
    xxl: TYPOGRAPHY.fontSizeXxl,
    xxxl: TYPOGRAPHY.fontSizeXxxl,
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
