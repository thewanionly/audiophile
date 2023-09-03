import { CreateStyled } from '@emotion/styled'

export const TRANSIENT_PROP_SYMBOL = '$'

export const transientOptions: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith(TRANSIENT_PROP_SYMBOL),
}
