import { GlobalConfig } from 'payload/types'

const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
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
  ],
}

export default About