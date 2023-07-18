interface Inclusion {
  quantity: number
  item: string
}

interface Gallery {
  first: ResponsiveImageType
  second: ResponsiveImageType
  third: ResponsiveImageType
}

interface Product {
  id: number
  slug: string
  name: string
  image: ResponsiveImageType
  category: string
  categoryImage: ResponsiveImageType
  new: boolean
  price: number
  description: string
  features: string
  includes: Inclusion[]
  gallery: Gallery
  others: string[]
  thumbnailImage: ResponsiveImageType
}

type ProductField = keyof Product

type ProductDetail = Omit<Product, 'categoryImage' | 'thumbnailImage'>
type MainProductDetail = Pick<
  ProductDetail,
  'slug' | 'name' | 'image' | 'category' | 'new' | 'price' | 'description'
>
type OtherProductDetail = Pick<ProductDetail, 'features' | 'includes' | 'gallery'>
type CartItemProduct = Pick<ProductDetail, 'id' | 'name' | 'slug' | 'category' | 'price' | 'image'>

type ProductLite = Pick<Product, 'id' | 'name' | 'slug' | 'category'> &
  Partial<Pick<Product, 'image' | 'new' | 'description'>>

type YouMayAlsoLikeProduct = Pick<Product, 'id' | 'name' | 'slug' | 'category' | 'thumbnailImage'>

interface Category {
  name: string
  slug: string
  image: ResponsiveImageType
  displayOrder: number
}

type CategoryProduct = Pick<
  Product,
  'id' | 'name' | 'slug' | 'category' | 'categoryImage' | 'new' | 'description'
>
