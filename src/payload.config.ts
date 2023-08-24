import {buildConfig} from 'payload/config';
import {cloudStorage} from "@payloadcms/plugin-cloud-storage";
import {s3Adapter} from "@payloadcms/plugin-cloud-storage/s3";

import path from 'path';
import Users from './collections/Users';
import Categories from "./collections/Categories";
import Venues from "./collections/Venues";
import Cuisine from "./collections/Cuisine";
import Media from "./collections/Media";

export default buildConfig({
    // S3 adapter
    //
    // plugins: [
    //     cloudStorage({
    //         collections: {
    //             'media': {
    //                 adapter: s3Adapter({
    //                     config: {
    //                         endpoint: process.env.S3_ENDPOINT,
    //                         region: process.env.S3_REGION,
    //                         credentials: {
    //                             accessKeyId: process.env.S3_ACCESS_KEY_ID,
    //                             secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    //                         },
    //                     },
    //                     bucket: process.env.S3_BUCKET,
    //                 }),
    //             }
    //         },
    //     }),
    // ],
    serverURL: process.env.PAYLOAD_URL,
    //CORS
    cors: [
        'https://the-food-club-front.vercel.app',
        'http://localhost:3000',
        'https://p01--cms--j4bvc8vdjtjb.code.run/',
        'vitals.vercel-insights.com'
    ],
    //CSRF
    csrf: [
        'https://the-food-club-front.vercel.app',
        'http://localhost:3000',
        'https://p01--cms--j4bvc8vdjtjb.code.run/',
        'vitals.vercel-insights.com'
    ],
    admin: {
        user: Users.slug,
    },
    collections: [
        Users,
        Venues,
        Categories,
        Cuisine,
        Media
    ],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
});
