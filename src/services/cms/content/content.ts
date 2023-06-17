import { client } from '@/lib/cms/content'
import { urlForImage } from '@/lib/cms/content/image'

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
      image: Object.fromEntries(
        Object.entries(results.image).map(([key, value]) => [
          key,
          {
            alt: value.alt,
            src: urlForImage(value.asset._ref).url(),
          },
        ])
      ) as unknown as ResponsiveImage,
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
