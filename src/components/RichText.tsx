import { RichTextField } from 'payload/dist/fields/config/types';

export const RichText: RichTextField =
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