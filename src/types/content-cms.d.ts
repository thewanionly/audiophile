interface Home {
  hero: ProductSection
  primaryFeaturedProduct: ProductSection
  secondaryFeaturedProduct: Pick<ProductSection, 'slug'>
  tertiaryFeaturedProduct: Pick<ProductSection, 'slug'>
}

interface ProductSection {
  slug: string
  message: string
}

interface HomeData {
  hero: ProductSectionData
  primaryFeaturedProduct: ProductSectionData
  secondaryFeaturedProduct: Pick<ProductSectionData, 'product'>
  tertiaryFeaturedProduct: Pick<ProductSectionData, 'product'>
}

interface ProductSectionData {
  product: ProductLite
  message: string
}

interface AboutTheBrand {
  heading: BlockText
  description: string
  image: ResponsiveImageType
}

interface NavLink {
  label: string
  href: string
  order: number
}

interface Social {
  name: string
  icon: import('@/components').IconName
  link: string
}

interface Footer {
  website_desc: string
  copyright: {
    line_1: string
    line_2: string
  }
  socials: Social[]
}
