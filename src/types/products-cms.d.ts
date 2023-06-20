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
  gallery: Gallery[]
  others: string[]
  thumbnailImage: ResponsiveImageType
}

type ProductLite = Pick<Product, 'id' | 'slug' | 'name' | 'image'> &
  Partial<Pick<Product, 'new' | 'description'>>

interface Category {
  name: string
  slug: string
  image: ResponsiveImageType
  displayOrder: number
}
