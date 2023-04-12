import {CollectionConfig} from "payload/types";

const Cuisine: CollectionConfig = {
    slug: "cuisine",
    fields: [
        {
            name: "name",
            type: "text",
            required:true
        }
    ]
}

export default Cuisine