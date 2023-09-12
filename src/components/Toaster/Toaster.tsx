import { Toaster as ReactHotToaster } from 'react-hot-toast'

import { theme } from '@/styles'

export const Toaster = () => (
  <ReactHotToaster
    gutter={8}
    toastOptions={{
      duration: 4000,
      style: {
        color: theme.colors.toasterText,
      },
      success: {
        style: {
          background: theme.colors.toasterSuccessBg,
        },
        iconTheme: {
          primary: theme.colors.toasterSuccessBg,
          secondary: theme.colors.toasterText,
        },
      },
      error: {
        style: {
          background: theme.colors.toasterErrorBg,
        },
        iconTheme: {
          primary: theme.colors.toasterErrorBg,
          secondary: theme.colors.toasterText,
        },
      },
    }}
  />
)
