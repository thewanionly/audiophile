import { type SchemaTypeDefinition } from 'sanity'

// Document types
import { product } from './product'
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product],
}
