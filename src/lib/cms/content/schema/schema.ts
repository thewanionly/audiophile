import { type SchemaTypeDefinition } from 'sanity'

// Document types
import { aboutTheBrand } from './aboutTheBrand'
import { footer } from './footer'
import { home } from './home'
import { navLink } from './navLink'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, aboutTheBrand, footer, navLink],
}
