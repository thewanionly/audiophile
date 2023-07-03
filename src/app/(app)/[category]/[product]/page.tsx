import { notFound } from 'next/navigation'

import { getAboutTheBrand } from '@/services/cms/content'
import { getCategories, getProductDetail } from '@/services/cms/products'

import { ProductDetail } from './page/ProductDetail'

type ProductDetailPageProps = {
  params: { category: string; product: string }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productDetail = await getProductDetail(params.product)

  if (!productDetail) {
    // Redirect to not-found page if product is null
    notFound()
  }

  const categories = await getCategories()
  const aboutTheBrand = await getAboutTheBrand()

  return (
    <ProductDetail product={productDetail} aboutTheBrand={aboutTheBrand} categories={categories} />
  )
}
