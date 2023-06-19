'use client'

import styled from '@emotion/styled'

import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { BrandHeadingPortableText } from './BrandHeadingPortableText'
import { ResponsiveImage } from '../ResponsiveImage'

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
  BrandSectionImageContainer: styled.div`
    width: 32.7rem;
    height: 30rem;
    margin: 0 auto;
    position: relative;
    border-radius: 0.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletPortrait)} {
      width: 100%;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 58.8rem;
      width: 54rem;
    }
  `,
  BrandSectionImage: styled(ResponsiveImage)`
    border-radius: 0.8rem;
    object-fit: cover;
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
      <S.BrandSectionImageContainer>
        <S.BrandSectionImage src={image.src} alt={image.alt} fill />
      </S.BrandSectionImageContainer>
      <S.BrandSectionTextContainer>
        <S.BrandSectionHeading>
          <BrandHeadingPortableText heading={heading} />
        </S.BrandSectionHeading>
        <S.BrandSectionDescription>{description}</S.BrandSectionDescription>
      </S.BrandSectionTextContainer>
    </S.AboutTheBrandSection>
  )
}
