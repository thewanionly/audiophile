'use client'

import Image from 'next/image'
import styled from '@emotion/styled'
import useMediaQuery from '@mui/material/useMediaQuery'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { theme } from '@/styles'

const mockedBrandDetails: AboutTheBrand = {
  heading: 'About the brand',
  description: 'Lorem ipsum sit dolor etc etc',
  image: {
    desktop: {
      src: '/images/desktop/best-gear.jpg',
      alt: 'man with headphones facing to his left holding his headphones with his right hand',
    },
    mobile: {
      src: '/images/mobile/best-gear.jpg',
      alt: 'man with headphones facing to his left holding his headphones with his right hand',
    },
    tablet: {
      src: '/images/tablet/best-gear.jpg',
      alt: 'man with headphones facing to his left holding his headphones with his right hand',
    },
  },
}

const S = {
  AboutTheBrandSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      gap: 8rem;
    }
  `,
  BrandSectionTextContainer: styled.div`
    text-align: center;
    max-width: 57.3rem;
    margin: 0 auto;
    margin-top: 4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 6.3rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      text-align: start;
      margin: 0;
      max-width: unset;
      flex-basis: 40%;
    }
  `,
  BrandSectionHeading: styled.h2`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 3.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    margin-bottom: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      line-height: 4.4rem;
      letter-spacing: 0.143rem;
    }
  `,
  BrandSectionDescription: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
  BrandSectionImageContainer: styled.div`
    width: 100%;
    height: 30rem;
    position: relative;
    border-radius: 0.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 58.8rem;
      width: 54rem;
    }
  `,
  BrandSectionImage: styled(Image)`
    border-radius: 0.8rem;
    object-fit: cover;
  `,
}

type AboutTheBrandSectionProps = {
  className?: string
  heading: string
  description: string
}

export const AboutTheBrandSection = ({
  className = '',
  heading,
  description,
}: AboutTheBrandSectionProps) => {
  const isMobile = useMediaQuery(theme.breakPoints.mobile)
  const isTablet = useMediaQuery(theme.breakPoints.tabletPortrait)
  const isDesktop = useMediaQuery(theme.breakPoints.desktop)

  const brandSectionImage: ImageType = {
    src: mockedBrandDetails.image[
      isMobile ? 'mobile' : isDesktop ? 'desktop' : isTablet ? 'tablet' : 'desktop'
    ].src,
    alt: mockedBrandDetails.image[
      isMobile ? 'mobile' : isDesktop ? 'desktop' : isTablet ? 'tablet' : 'desktop'
    ].alt,
  }

  return (
    <S.AboutTheBrandSection className={className}>
      <S.BrandSectionImageContainer>
        <S.BrandSectionImage src={brandSectionImage.src} alt={brandSectionImage.alt} fill />
      </S.BrandSectionImageContainer>
      <S.BrandSectionTextContainer>
        <S.BrandSectionHeading>{heading}</S.BrandSectionHeading>
        <S.BrandSectionDescription>{description}</S.BrandSectionDescription>
      </S.BrandSectionTextContainer>
    </S.AboutTheBrandSection>
  )
}
