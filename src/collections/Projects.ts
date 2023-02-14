import { CollectionConfig } from 'payload/types'

const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: true,
    }
  },
  labels: { singular: 'Project', plural: 'Projects' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', '_status'],
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
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
      name: 'link',
      type: 'text',
      label: 'Link to project as URL, e.g. : "https://website-name.com". Optional',
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Project description (max. 200 chars length)',
      required: true,
      maxLength: 200,
    },
    {
      name: 'keywords',
      type: 'text',
      label: 'Project keywords list. Seperate keywords with comma! (max. 100 chars length)',
      required: true,
      maxLength: 100,
    }
  ],
}

export default Projects