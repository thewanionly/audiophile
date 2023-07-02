import { getCategories } from '@/services/cms/products'

import { ProductDetail } from './page/ProductDetail'
import { getAboutTheBrand } from '@/services/cms/content'

type ProductDetailPageProps = {
  params: { category: string; product: string }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const categories = await getCategories()
  const aboutTheBrand = await getAboutTheBrand()

  return <ProductDetail aboutTheBrand={aboutTheBrand} categories={categories} />
}
