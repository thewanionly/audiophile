import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'navLink',
      type: 'document',
      title: 'Nav link',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          name: 'href',
          type: 'string',
          title: 'URL',
        },
        {
          name: 'order',
          type: 'number',
          title: 'Display order',
        },
      ],
    },
  ],
}
