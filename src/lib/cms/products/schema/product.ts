import { responsiveImageFields } from '@/lib/cms/common/fields'

export const product = {
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    {
      title: 'Id',
      name: 'id',
      type: 'number',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Short name',
      name: 'short_name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'object',
      fields: responsiveImageFields,
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
    },
    {
      title: 'Category Image',
      name: 'categoryImage',
      type: 'object',
      fields: responsiveImageFields,
    },
    {
      title: 'New',
      name: 'new',
      type: 'boolean',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Features',
      name: 'features',
      type: 'text',
    },
    {
      title: 'Includes',
      name: 'includes',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'include',
          fields: [
            {
              title: 'Quantity',
              name: 'quantity',
              type: 'number',
            },
            {
              title: 'Item',
              name: 'item',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'object',
      fields: [
        {
          title: 'First',
          name: 'first',
          type: 'object',
          fields: responsiveImageFields,
        },
        {
          title: 'Second',
          name: 'second',
          type: 'object',
          fields: responsiveImageFields,
        },
        {
          title: 'Third',
          name: 'third',
          type: 'object',
          fields: responsiveImageFields,
        },
      ],
    },
    {
      title: 'Others',
      name: 'others',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Thumbnail Image',
      name: 'thumbnailImage',
      type: 'object',
      fields: responsiveImageFields,
    },
  ],
}
