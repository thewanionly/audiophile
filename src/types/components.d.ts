interface BlockTextChild {
  marks: string[]
  text: string
  _type: string
}

interface BlockText {
  children: BlockTextChild[]
  style: string
  _type: string
}

interface ImageType {
  src: string
  alt: string
}

interface ResponsiveImageSrc {
  mobile: string
  tablet: string
  desktop: string
}

interface ResponsiveImageType {
  src: ResponsiveImageSrc
  alt: string
}
