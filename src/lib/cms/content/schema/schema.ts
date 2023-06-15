import { type SchemaTypeDefinition } from 'sanity'

// Document types
import { aboutTheBrand } from './aboutTheBrand'
import { footer } from './footer'
import { navLink } from './navLink'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutTheBrand, footer, navLink],
}
