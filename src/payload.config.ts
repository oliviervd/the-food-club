import { buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";

import path from "path";
import Users from "./collections/Users";
import Categories from "./collections/Categories";
import Venues from "./collections/Venues";
import Cuisine from "./collections/Cuisine";
import Media from "./collections/Media";
import Designer from "./collections/Designer";
import Lists from "./collections/Navigation";
import Globals from "./collections/Globals";

export default buildConfig({
  //
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: s3Adapter({
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
            },
            bucket: process.env.S3_BUCKET,
          }),

          generateFileURL: ({ filename, prefix }) => {
            return ["https://d3nidktcupd88v.cloudfront.net", prefix, filename]
              .filter(Boolean)
              .join("/");
          },
        },
      },
    }),
  ],
  localization:{
    locales: [
      {
        code: 'nl',
        label: {
          nl: "Nederlands",
          en: "Dutch",
          fr: "Néerlandais"
        }
      },
      {
        code: 'en',
        label: {
          en: "English",
          fr: "Anglais",
          nl: "Engels"
        }
      },
      {
        code: 'fr',
        label: {
          fr: "Francais",
          en: "French",
          nl: "Frans"
        }
      }
    ],
    defaultLocale: 'en',
    fallback: true
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  //CORS
  cors: [
    "https://the-food-club-front.vercel.app",
    "http://localhost:3000",
    "https://p01--cms--j4bvc8vdjtjb.code.run/",
    "vitals.vercel-insights.com",
    "https://www.thefoodclub.be"
  ],
  //CSRF
  csrf: [
    "https://the-food-club-front.vercel.app",
    "http://localhost:3000",
    "https://p01--cms--j4bvc8vdjtjb.code.run/",
    "vitals.vercel-insights.com",
    "https://www.thefoodclub.be"
  ],
  collections: [Users, Venues, Categories, Cuisine, Designer, Media, Lists, Globals],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
