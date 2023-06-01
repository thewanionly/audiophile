import styled from '@emotion/styled'

import CartIcon from 'public/icons/cart.svg'

export enum IconName {
  Cart = 'cart',
}

const IconMap = {
  [IconName.Cart]: CartIcon,
} as const

type IconProps = {
  className?: string
  name: IconName
}

const StyledIcon = styled.div``

export const Icon = ({ className = '', name }: IconProps) => {
  const IconComponent = IconMap[name]

  return <StyledIcon as={IconComponent} className={className} aria-label={`${name} icon`} />
}
