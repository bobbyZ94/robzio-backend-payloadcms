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
    meta: {
      // browsertab name suffix
      titleSuffix: ' - Robzio',
      // favicon for browsertab
      // favicon: '/assets/favicon.svg',
      // image that appears in previews of shared links through admin panel/social media
      // ogImage: '/assets/logo.svg',
    },
    components: {
      graphics: {
        // image component to be displayed as the logo on the Sign Up / Login view.
        // Logo,
        // image component displayed above the Nav in the admin panel, often a condensed version of a full logo.
        // Icon,
      },
    },
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
  // disable sending data to payloadcms devs
  telemetry: false,
  upload: {
    limits: {
      fileSize: 10000000, // 10MB, written in bytes
    },
  },
  rateLimit: {
    window: 9000,
    max: 500,
    trustProxy: true,
  },
  csrf: [
    'https://robzio.com', 'https://www.robzio.com', 'http://localhost:5173/',
  ],
  cors: [
    'https://robzio.com', 'https://www.robzio.com', 'http://localhost:5173/', 'https://localhost:3000',
    'https://127.0.0.1', 'http://robzio.com', 'http://www.robzio.com', 'http://localhost:5173/', 'http://localhost:3000', 'http://127.0.0.1'
  ]
});
