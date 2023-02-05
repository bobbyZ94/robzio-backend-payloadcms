import { CollectionConfig } from 'payload/types'
import slugify from 'slugify'

const Blog: CollectionConfig = {
  slug: 'blog',
  labels: { singular: 'Blog', plural: 'Blogs' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date'],
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [(args) => slugify(args.originalDoc.title, { lower: true, remove: /[*+~.()'"!:@]/g })],
      },
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'text',
      type: 'richText',
      label: 'Text',
      required: true,
      defaultValue: [
        {
          children: [{ text: 'Insert blog entry here...' }],
        },
      ],
      admin: {
        elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'link', 'ol', 'ul', 'indent', 'upload'],
        leaves: ['bold', 'italic', 'underline', 'strikethrough', 'code'],
        upload: {
          collections: {
            media: {
              fields: [],
            },
          },
        },
      },
    },
  ],
}

export default Blog