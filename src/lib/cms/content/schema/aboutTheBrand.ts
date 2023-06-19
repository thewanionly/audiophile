import { blockTypeDecorators, blockTypeStyles } from '../custom/block/fields'

export const aboutTheBrand = {
  title: 'About The Brand',
  name: 'aboutTheBrand',
  type: 'document',
  fields: [
    {
      title: 'Brand section heading',
      name: 'heading',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: blockTypeStyles,
          marks: {
            decorators: blockTypeDecorators,
          },
        },
      ],
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
          title: 'Source',
          name: 'src',
          type: 'object',
          fields: [
            {
              title: 'Mobile',
              name: 'mobile',
              type: 'image',
            },
            {
              title: 'Tablet',
              name: 'tablet',
              type: 'image',
            },
            {
              title: 'Desktop',
              name: 'desktop',
              type: 'image',
            },
          ],
        },
        {
          title: 'Alternative text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
  ],
}
