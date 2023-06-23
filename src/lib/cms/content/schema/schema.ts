import { type SchemaTypeDefinition } from 'sanity'

// Document types
import { aboutTheBrand } from './aboutTheBrand'
import { footer } from './footer'
import { navLink } from './navLink'
import { home } from './home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, aboutTheBrand, footer, navLink],
}
