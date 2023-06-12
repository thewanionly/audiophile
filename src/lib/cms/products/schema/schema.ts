import { type SchemaTypeDefinition } from 'sanity'

// Document types
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
