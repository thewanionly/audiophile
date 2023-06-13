import { client } from '@/lib/cms/content'

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

export const getFooter = async (): Promise<Footer[]> => {
  try {
    const query = `*\[_type == "footer"\][0] {
      website_desc,
      copyright,
    }`

    return await client.fetch(query)
  } catch (error) {
    throw error
  }
}
