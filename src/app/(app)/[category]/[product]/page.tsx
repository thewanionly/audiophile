import { getCategories } from '@/services/cms/products'

import { ProductDetail } from './page/ProductDetail'
import { getAboutTheBrand } from '@/services/cms/content'
import { mockedProduct } from '@/tests/__mocks__/data/product'

type ProductDetailPageProps = {
  params: { category: string; product: string }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const categories = await getCategories()
  const aboutTheBrand = await getAboutTheBrand()

  return (
    <ProductDetail
      product={{
        ...mockedProduct,
        name: params.product.replaceAll('-', ' '),
      }}
      aboutTheBrand={aboutTheBrand}
      categories={categories}
    />
  )
}
