import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Categories from "./collections/Categories";
import Venues from "./collections/Venues";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
      Users,
      Venues,
      Categories
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
