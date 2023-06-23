interface Home {
  hero: ProductSection
  primaryFeaturedProduct: ProductSection
  secondaryFeaturedProduct: ProductSection
  tertiaryFeaturedProduct: ProductSection
}

interface ProductSection {
  slug: string
  message?: string
}

interface HomeData {
  hero: ProductSectionData
  primaryFeaturedProduct: ProductSectionData
  secondaryFeaturedProduct: ProductSectionData
  tertiaryFeaturedProduct: ProductSectionData
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
