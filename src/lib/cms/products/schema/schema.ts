import { type SchemaTypeDefinition } from 'sanity'

import { category } from './category'
// Document types
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product],
}
