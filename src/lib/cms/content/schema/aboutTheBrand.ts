import { responsiveImageFields } from '@/lib/cms/common/fields'
import { blockTypeDecorators, blockTypeStyles } from '@/lib/cms/content/custom/block/fields'

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
      fields: responsiveImageFields,
    },
  ],
}
