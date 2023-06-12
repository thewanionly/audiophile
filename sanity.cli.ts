/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from 'sanity/cli'

// Audiophile Content
const contentProjectId = process.env.NEXT_PUBLIC_SANITY_CONTENT_PROJECT_ID
const contentDataset = process.env.NEXT_PUBLIC_SANITY_CONTENT_DATASET

const contentCLIConfig = defineCliConfig({
  api: { projectId: contentProjectId, dataset: contentDataset },
})

// Audiophile Products
const productsProjectId = process.env.NEXT_PUBLIC_SANITY_PRODUCTS_PROJECT_ID
const productsDataset = process.env.NEXT_PUBLIC_SANITY_PRODUCTS_DATASET

const productsCLIConfig = defineCliConfig({
  api: { projectId: productsProjectId, dataset: productsDataset },
})

// Export the two project's CLI config
export { contentCLIConfig, productsCLIConfig }
