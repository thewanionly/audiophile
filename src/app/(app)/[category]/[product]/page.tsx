import { getCategories } from '@/services/cms/products'

import { ProductDetail } from './page/ProductDetail'

type ProductDetailPageProps = {
  params: { category: string; product: string }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const categories = await getCategories()

  return <ProductDetail categories={categories} />
}
