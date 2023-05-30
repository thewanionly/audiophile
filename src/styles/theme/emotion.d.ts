import '@emotion/react'
import type { MantineTheme } from '@mantine/core'

import { BreakpointsValues } from '../variables'

declare module '@emotion/react' {
  export interface Theme extends MantineTheme {
    other: {
      colors: {
        appBg: string
        primary: string
        headerBg: string
        navLink: string
        navLinkHover: string
        menuIcon: string
        headerDivider: string
        cartIcon: string
        cartIconHover: string
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
        mobile: BreakpointsValues
        tabletPortrait: BreakpointsValues
        tabletLandscape: BreakpointsValues
        desktop: BreakpointsValues
        desktopLarge: BreakpointsValues
      }
    }
  }
}
