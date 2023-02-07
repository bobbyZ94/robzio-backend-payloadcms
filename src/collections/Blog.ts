import { CollectionConfig } from 'payload/types'
import slugify from 'slugify'
import { RichText } from '../components/RichText'

const Blog: CollectionConfig = {
  slug: 'blog',
  access: {
    read: () => true,
  },
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
        hidden: true,
      },
      hooks: {
        beforeValidate: [(args) => slugify(args.siblingData.title, { lower: true, remove: /[*+~.()'"!:@]/g })],
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
      name: 'contentBlocks',
      type: 'blocks',
      label: 'Content Blocks',
      blocks: [
        {
          slug: 'richText',
          fields: [
            RichText,
          ]
        },
        {
          slug: 'code javascript',
          fields: [
            {
              name: 'code',
              type: 'code',
              label: 'Javascript',
              admin: {
                language: 'javascript'
              }
            },
          ]
        },
        {
          slug: 'code typescript',
          fields: [
            {
              name: 'code',
              type: 'code',
              label: 'Typescript',
              admin: {
                language: 'typescript'
              }
            },
          ]
        },
        {
          slug: 'code html',
          fields: [
            {
              name: 'code',
              type: 'code',
              label: 'HTML',
              admin: {
                language: 'html'
              }
            },
          ]
        },
        {
          slug: 'code css',
          fields: [
            {
              name: 'code',
              type: 'code',
              label: 'CSS',
              admin: {
                language: 'css'
              }
            },
          ]
        },
      ]
    }
  ],
}

export default Blog