import { getAboutTheBrand } from '@/services/cms/content'
import { Home } from './page/Home'

export default async function HomePage() {
  const aboutTheBrand = await getAboutTheBrand()

  return <Home aboutTheBrand={aboutTheBrand} />
}
