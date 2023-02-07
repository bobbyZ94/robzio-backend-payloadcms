import { GlobalConfig } from 'payload/types'
import { RichText } from '../components/RichText'

const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    RichText,
  ],
}

export default About