import {Field} from "payload/types";

const review: Field = {
    name: "reviews",
        label: "reviews",
    type: "group",
    fields: [
        {
            name: "reviewEN",
            type: "richText"
        },
        {
            name: "reviewNL",
            type: "richText"
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "users"
        }
    ]
}

export default review