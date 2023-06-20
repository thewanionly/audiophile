import { responsiveImageFields } from '@/lib/cms/common/fields'

export const category = {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'object',
      fields: responsiveImageFields,
    },
    {
      title: 'Display order',
      name: 'displayOrder',
      type: 'number',
    },
  ],
}
