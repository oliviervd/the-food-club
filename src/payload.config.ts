import {buildConfig} from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Categories from "./collections/Categories";
import Venues from "./collections/Venues";
import Cuisine from "./collections/Cuisine";
import Media from "./collections/Media";

export default buildConfig({
    serverURL: process.env.PAYLOAD_URL,
    cors: [
        'https://the-food-club-front.vercel.app/',
        'http://localhost:3000',
        'https://p01--cms--2y8cq25kbv7n.code.run/',
        'vitals.vercel-insights.com'
    ],
    csrf: [
        'https://the-food-club-front.vercel.app/',
        'http://localhost:3000',
        'https://p01--cms--2y8cq25kbv7n.code.run/',
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
