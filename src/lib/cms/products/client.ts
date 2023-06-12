import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from './env'

export const productClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
