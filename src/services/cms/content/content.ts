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
