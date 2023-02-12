import { CollectionConfig } from 'payload/types'
import slugify from 'slugify'

const Blog: CollectionConfig = {
  slug: 'blog',
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: true,
    }
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
            {
              name: 'text',
              type: 'richText',
              label: 'Text',
              defaultValue: [
                {
                  children: [{ text: 'Inser legal text here...' }],
                },
              ],
              admin: {
                elements: ['h1', 'h2', 'h3', 'link', 'ol', 'ul', 'indent', 'upload'],
                leaves: ['bold', 'italic', 'underline', 'strikethrough', 'code'],
                upload: {
                  collections: {
                    media: {
                      fields: [],
                    },
                  },
                },
              },
            }
          ]
        },
        {
          slug: 'code javascript',
          fields: [
            {
              name: 'filename',
              type: 'text',
              label: 'Filename. E.g. : /+page.svelte'
            },
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
              name: 'filename',
              type: 'text',
              label: 'Filename. E.g. : /+page.svelte'
            },
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
              name: 'filename',
              type: 'text',
              label: 'Filename. E.g. : /+page.svelte'
            },
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
              name: 'filename',
              type: 'text',
              label: 'Filename. E.g. : /+page.svelte'
            },
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