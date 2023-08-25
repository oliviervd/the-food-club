import {Field} from "payload/types";

const catchPhrase: Field = {
    name: "slugs",
    label: "slugs",
    admin: {
        description: "this is what the food club had to say (in short). - rule number 2. don't argue with the food club."
    },
    type: "group",
    fields: [
        {
            name: "slugEN",
            label: "slug (EN)",
            type: "richText"
        },
        {
            name: "slugNL",
            label: "slug (NL)",
            type: "richText"
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "users"
        }
    ]
}

export default catchPhrase