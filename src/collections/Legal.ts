import { GlobalConfig } from 'payload/types'

const Legal: GlobalConfig = {
  slug: 'legal',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'richText',
      label: 'Text',
      required: true,
      defaultValue: [
        {
          children: [{ text: 'Inser legal text here...' }],
        },
      ],
      admin: {
        elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'link', 'ol', 'ul', 'indent', 'upload'],
        leaves: ['bold', 'italic', 'underline', 'strikethrough'],
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

export default Legal
