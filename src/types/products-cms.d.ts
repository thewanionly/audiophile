interface Inclusion {
  quantity: number
  item: string
}

interface Gallery {
  first: ResponsiveImage
  second: ResponsiveImage
  third: ResponsiveImage
}

interface Product {
  id: number
  slug: string
  name: string
  image: ResponsiveImage
  category: string
  categoryImage: ResponsiveImage
  new: boolean
  price: number
  description: string
  features: string
  includes: Inclusion[]
  gallery: Gallery[]
  others: string[]
  thumbnailImage: ResponsiveImage
}
