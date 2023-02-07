import { GlobalConfig } from 'payload/types'

const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      type: 'textarea',
      label: 'Text',
      required: true,
    },
    {
      name: 'email',
      label: 'Contact E-Mail',
      type: 'email',
      required: true,
    },
  ],
}

export default Contact