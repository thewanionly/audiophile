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

interface ResponsiveImageType {
  mobile: ImageType
  tablet: ImageType
  desktop: ImageType
}
