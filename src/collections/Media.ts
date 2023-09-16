import {CollectionConfig} from "payload/types";
import contentStatus from "../fields/contentStatus";
import notes from "../fields/notes";


const Media:CollectionConfig = {
    slug: "media",
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        disableLocalStorage: true,
        imageSizes: [
            {
                name: 'mobileThumbnail',
                width: 360,
                height: undefined,
                position: 'centre'
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined,
                position: 'centre'
            },
            {
                name: 'original',
                width: undefined,
                height: undefined,
            }
        ]
    },
    access: {
        read: ()=> true,
    },
    fields:[
        {
            name: "title",
            type: "text",
            required: true
        },
        {
            name: "alt",
            type: "text"
        },
        {
            name: "dish",
            type: "text",
            admin: {
                description: "if a picture of  a dish on the menu, describe the dish in one or two sentences. Keep it short! "
            }
        },
        contentStatus,
        notes
    ]
}

export default Media
