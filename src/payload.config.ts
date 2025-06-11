// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Reviews } from './collections/Reviews'
import { Jobs } from './collections/Jobs'
import { Media } from './collections/Media'
import { Applications } from './collections/Applications'
import { Contact } from './collections/Contact'
import { Quote } from './collections/Quote'
import { Training } from './collections/Training'
import { Projects } from './collections/Projects'
import { MediaImages } from './collections/MediaImages'

import { Internships } from './collections/Internships'
import { IApplications } from './collections/IApplications'
import { IMedia } from './collections/IMedia'
import { Subscribers } from './collections/Subscribers'



const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // Nav: Navbar,
      // Header: ['./components/Header'],
      views: {
        dashboard: {
          Component: './components/MyDashboard'
        }
      }
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Reviews, Jobs, Media, Applications, Contact, Quote, Training, Projects, MediaImages, Internships, IApplications, IMedia, Subscribers

  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  upload: {
    maxFileSize: 5 * 1024 * 1024, // 5 MB max file upload size
  },
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  cors: ['http://localhost:5173'],

})

