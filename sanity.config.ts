/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/(cms)/...` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import * as cmsContent from '@/lib/cms/content'
import * as productsContent from '@/lib/cms/products'

// Audiophile Content
const contentStudioConfig = defineConfig({
  name: 'audiophile-content-studio',
  basePath: '/audiophile-content-studio',
  projectId: cmsContent.projectId,
  dataset: cmsContent.dataset,
  schema: cmsContent.schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: cmsContent.apiVersion }),
  ],
})

// Audiophile Products
const productsStudioConfig = defineConfig({
  name: 'audiophile-products-studio',
  basePath: '/audiophile-products-studio',
  projectId: productsContent.projectId,
  dataset: productsContent.dataset,
  schema: productsContent.schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: productsContent.apiVersion }),
  ],
})

// Export the two project's studio config
const projectsConfigs = [contentStudioConfig, productsStudioConfig]
export default projectsConfigs
