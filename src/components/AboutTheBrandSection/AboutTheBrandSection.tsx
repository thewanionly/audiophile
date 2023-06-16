'use client'

import Image from 'next/image'
import styled from '@emotion/styled'

import { appSectionContainer, mediaQuery } from '@/styles/utils'

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
    width: 32.7rem;
    height: 30rem;
    position: relative;
  `,
  BrandSectionImage: styled(Image)`
    object-fit: contain;
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
  return (
    <S.AboutTheBrandSection className={className}>
      <S.BrandSectionTextContainer>
        <S.BrandSectionHeading>{heading}</S.BrandSectionHeading>
        <S.BrandSectionDescription>{description}</S.BrandSectionDescription>
      </S.BrandSectionTextContainer>
      <S.BrandSectionImageContainer>
        <S.BrandSectionImage
          src={mockedBrandDetails.image.desktop.src}
          alt={mockedBrandDetails.image.desktop.alt}
          fill
        />
      </S.BrandSectionImageContainer>
    </S.AboutTheBrandSection>
  )
}
