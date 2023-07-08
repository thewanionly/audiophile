'use client'

import styled from '@emotion/styled'

import { ResponsiveImage } from '@/components/ResponsiveImage'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { BrandHeadingPortableText } from './BrandHeadingPortableText'

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
    &,
    & > .primary-text {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: ${({ theme }) => theme.fontSizes.med3};
      line-height: 3.8rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkTitle};

      margin-bottom: 3.2rem;

      ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
        font-size: ${({ theme }) => theme.fontSizes.lg3};
        line-height: 4.4rem;
        letter-spacing: 0.143rem;
      }
    }

    .primary-text {
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  BrandSectionDescription: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextDark};
  `,
  BrandSectionImage: styled(ResponsiveImage)`
    width: 100%;
    aspect-ratio: 1.09;
    margin: 0 auto;
    position: relative;
    border-radius: 0.8rem;

    .image {
      border-radius: 0.8rem;
      object-fit: cover;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      aspect-ratio: 2.3;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 0;
      width: 55%;
      aspect-ratio: 0.92;
    }
  `,
}

type AboutTheBrandSectionProps = {
  className?: string
  heading: BlockText
  description: string
  image: ResponsiveImageType
}

export const AboutTheBrandSection = ({
  className = '',
  heading,
  description,
  image,
}: AboutTheBrandSectionProps) => {
  return (
    <S.AboutTheBrandSection className={className}>
      <S.BrandSectionImage src={image.src} alt={image.alt} fill />
      <S.BrandSectionTextContainer>
        <S.BrandSectionHeading>
          <BrandHeadingPortableText heading={heading} />
        </S.BrandSectionHeading>
        <S.BrandSectionDescription>{description}</S.BrandSectionDescription>
      </S.BrandSectionTextContainer>
    </S.AboutTheBrandSection>
  )
}
