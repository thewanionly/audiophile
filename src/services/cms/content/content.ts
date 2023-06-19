import { client } from '@/lib/cms/content'
import { urlForImage } from '@/lib/cms/content/image'

const emptyResponsiveImage: ResponsiveImageType = {
  src: {
    mobile: '',
    tablet: '',
    desktop: '',
  },
  alt: '',
}

const postProcessImage = (image: ResponsiveImageType): ResponsiveImageType | null => {
  if (!image) return null

  return {
    src: Object.fromEntries(
      Object.entries(image.src).map(([key, value]) => [key, urlForImage(value.asset._ref).url()])
    ) as unknown as ResponsiveImageSrc,
    alt: image.alt,
  }
}

export const getAboutTheBrand = async (): Promise<AboutTheBrand> => {
  try {
    const query = `*\[_type == "aboutTheBrand"\][0] {
      heading,
      description,
      image,
    }`

    const results: AboutTheBrand = await client.fetch(query)

    return {
      ...results,
      image: postProcessImage(results.image) || emptyResponsiveImage,
    }
  } catch (error) {
    throw error
  }
}

export const getFooter = async (): Promise<Footer> => {
  try {
    const query = `*\[_type == "footer"\][0] {
      website_desc,
      copyright,
      socials,
    }`

    return await client.fetch(query)
  } catch (error) {
    throw error
  }
}

export const getNavLinks = async (): Promise<NavLink[]> => {
  try {
    const query = `*\[_type == "navLink"\] {
      label,
      href,
      order,
    }`

    return await client.fetch(query)
  } catch (error) {
    throw error
  }
}
