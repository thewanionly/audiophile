'use client'

import { PortableText } from '@portabletext/react'

import { noStyleRenderConfig, primaryMarkRenderConfig } from '@/utils/cms'

const blockTextCustomComponents = {
  block: noStyleRenderConfig,
  marks: primaryMarkRenderConfig,
}

export const BrandHeadingPortableText = ({ heading }: { heading: BlockText }) => (
  <PortableText value={heading} components={blockTextCustomComponents} />
)
