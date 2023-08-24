import {CollectionConfig} from "payload/types";
import notes from "../fields/notes";

const Cuisine: CollectionConfig = {
    slug: "cuisine",
    admin: {
        useAsTitle: "name"
    },
    access: {
        read: ()=> true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required:true
        },
        notes
    ]
}

export default Cuisine