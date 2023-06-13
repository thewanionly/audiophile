import { type SchemaTypeDefinition } from 'sanity'

// Document types
import { navLink } from './navLink'
import { footer } from './footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navLink, footer],
}
