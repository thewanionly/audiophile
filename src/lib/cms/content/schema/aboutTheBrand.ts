export const aboutTheBrand = {
  title: 'About The Brand',
  name: 'aboutTheBrand',
  type: 'document',
  fields: [
    {
      title: 'Brand section heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Brand section description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Brand section image',
      name: 'image',
      type: 'object',
      fields: [
        {
          title: 'Mobile',
          name: 'mobile',
          type: 'object',
          fields: [
            {
              title: 'Image source',
              name: 'src',
              type: 'string',
            },
            {
              title: 'Alt text',
              name: 'alt',
              type: 'string',
            },
          ],
        },
        {
          title: 'Tablet',
          name: 'tablet',
          type: 'object',
          fields: [
            {
              title: 'Image source',
              name: 'src',
              type: 'string',
            },
            {
              title: 'Alt text',
              name: 'alt',
              type: 'string',
            },
          ],
        },
        {
          title: 'Desktop',
          name: 'desktop',
          type: 'object',
          fields: [
            {
              title: 'Image source',
              name: 'src',
              type: 'string',
            },
            {
              title: 'Alt text',
              name: 'alt',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
