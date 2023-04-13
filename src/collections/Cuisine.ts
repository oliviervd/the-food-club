import {CollectionConfig} from "payload/types";
import notes from "../fields/notes";

const Cuisine: CollectionConfig = {
    slug: "cuisine",
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