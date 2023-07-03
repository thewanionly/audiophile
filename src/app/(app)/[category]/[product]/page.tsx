import { getAboutTheBrand } from '@/services/cms/content'
import { getCategories, getProductDetail } from '@/services/cms/products'

import { ProductDetail } from './page/ProductDetail'

type ProductDetailPageProps = {
  params: { category: string; product: string }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const categories = await getCategories()
  const aboutTheBrand = await getAboutTheBrand()
  const productDetail = await getProductDetail(params.product)

  return (
    <ProductDetail product={productDetail} aboutTheBrand={aboutTheBrand} categories={categories} />
  )
}
