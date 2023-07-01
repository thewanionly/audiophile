import { responsiveImageFields } from '@/lib/cms/common/fields'

export const home = {
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    {
      title: 'Hero Section',
      name: 'hero',
      type: 'object',
      fields: [
        {
          title: 'Product Slug',
          name: 'slug',
          type: 'string',
        },
        {
          title: 'Message',
          name: 'message',
          type: 'string',
        },
        {
          title: 'Section image',
          name: 'sectionImage',
          type: 'object',
          fields: responsiveImageFields,
        },
      ],
    },
    {
      title: 'Primary Featured Product',
      name: 'primaryFeaturedProduct',
      type: 'object',
      fields: [
        {
          title: 'Product Slug',
          name: 'slug',
          type: 'string',
        },
        {
          title: 'Message',
          name: 'message',
          type: 'string',
        },
        {
          title: 'Section image',
          name: 'sectionImage',
          type: 'object',
          fields: responsiveImageFields,
        },
      ],
    },
    {
      title: 'Secondary Featured Product',
      name: 'secondaryFeaturedProduct',
      type: 'object',
      fields: [
        {
          title: 'Product Slug',
          name: 'slug',
          type: 'string',
        },
        {
          title: 'Section image',
          name: 'sectionImage',
          type: 'object',
          fields: responsiveImageFields,
        },
      ],
    },
    {
      title: 'Tertiary Featured Product',
      name: 'tertiaryFeaturedProduct',
      type: 'object',
      fields: [
        {
          title: 'Product Slug',
          name: 'slug',
          type: 'string',
        },
        {
          title: 'Section image',
          name: 'sectionImage',
          type: 'object',
          fields: responsiveImageFields,
        },
      ],
    },
  ],
}
