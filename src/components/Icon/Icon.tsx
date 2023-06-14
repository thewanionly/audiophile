import styled from '@emotion/styled'

import ArrowRight from 'public/icons/arrow-right.svg'
import CartIcon from 'public/icons/cart.svg'
import FacebookIcon from 'public/icons/facebook.svg'
import InstagramIcon from 'public/icons/instagram.svg'
import TwitterIcon from 'public/icons/twitter.svg'

export enum IconName {
  ArrowRight = 'arrow_right',
  Cart = 'cart',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Twitter = 'twitter',
}

const IconMap = {
  [IconName.ArrowRight]: ArrowRight,
  [IconName.Cart]: CartIcon,
  [IconName.Facebook]: FacebookIcon,
  [IconName.Instagram]: InstagramIcon,
  [IconName.Twitter]: TwitterIcon,
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
