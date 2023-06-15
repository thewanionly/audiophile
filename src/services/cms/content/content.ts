import { client } from '@/lib/cms/content'

export const getAboutTheBrand = async (): Promise<AboutTheBrand> => {
  try {
    const query = `*\[_type == "aboutTheBrand"\][0] {
      heading,
      description,
    }`

    return await client.fetch(query)
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
