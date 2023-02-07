import { GlobalConfig } from 'payload/types'
import { RichText } from '../components/RichText'

const Legal: GlobalConfig = {
  slug: 'legal',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    RichText,
  ],
}

export default Legal
