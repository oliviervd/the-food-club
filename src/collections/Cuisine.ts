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
        {
            name: "type",
            type: "select",
            required: true,
            options: [
                {
                    label: "drinks",
                    value: "drinks"
                },
                {
                    label: "cuisine",
                    value: "cuisine"
                },
                {
                    label: "dish",
                    value: "dish"
                }
            ]
        },
        notes
    ]
}

export default Cuisine