/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/(cms)/...` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { apiVersion, dataset, projectId, schema } from '@/lib/cms'
import {
  apiVersion as apiVersionProducts,
  dataset as datasetProducts,
  projectId as projectIdProducts,
  schema as schemaProducts,
} from '@/lib/cms/products'

// Audiophile Content
const contentStudioConfig = defineConfig({
  name: 'audiophile-content-studio',
  basePath: '/sanity-studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

// Audiophile Products
const productsStudioConfig = defineConfig({
  name: 'audiophile-products-studio',
  basePath: '/audiophile-products-studio',
  projectId: projectIdProducts,
  dataset: datasetProducts,
  schema: schemaProducts,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersionProducts }),
  ],
})

// Export the two project's studio config
const projectsConfigs = [contentStudioConfig, productsStudioConfig]
export default projectsConfigs
