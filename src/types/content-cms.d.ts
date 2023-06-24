interface Home {
  hero: ProductSection
  primaryFeaturedProduct: ProductSection
  secondaryFeaturedProduct: Omit<ProductSection, 'message'>
  tertiaryFeaturedProduct: Omit<ProductSection, 'message'>
}

interface ProductSection {
  slug: string
  message: string
  sectionImage: ResponsiveImageType
}

interface HomeData {
  hero: ProductSectionData
  primaryFeaturedProduct: ProductSectionData
  secondaryFeaturedProduct: Omit<ProductSectionData, 'message'>
  tertiaryFeaturedProduct: Omit<ProductSectionData, 'message'>
}

interface ProductSectionData {
  product: ProductLite
  message: string
  sectionImage: ResponsiveImageType
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
