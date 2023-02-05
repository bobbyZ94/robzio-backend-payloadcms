import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Settings from './collections/Settings';
import Legal from './collections/Legal';
import About from './collections/About';
import Contact from './collections/Contact';
import Blog from './collections/Blog';
import Projects from './collections/Projects';
import Media from './collections/Media';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Blog,
    Projects,
    Media,
  ],
  globals: [
    Settings,
    Legal,
    About,
    Contact,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  telemetry: false,
  upload: {
    limits: {
      fileSize: 10000000, // 5MB, written in bytes
    },
  },
});
