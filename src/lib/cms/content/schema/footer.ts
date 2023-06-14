export const footer = {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  fields: [
    {
      title: 'Website Description',
      name: 'website_desc',
      type: 'string',
    },
    {
      title: 'Copyright text',
      name: 'copyright',
      type: 'object',
      fields: [
        {
          title: 'Line 1',
          name: 'line_1',
          type: 'string',
          description: 'Text displayed before the copyright year.',
        },
        {
          title: 'Line 2',
          name: 'line_2',
          type: 'string',
          description: 'Text displayed after the copyright year.',
        },
      ],
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'social',
          fields: [
            { type: 'string', name: 'name' },
            { type: 'string', name: 'icon' },
            { type: 'string', name: 'link' },
          ],
        },
      ],
    },
  ],
}
