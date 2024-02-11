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
            name: "slug",
            label: "slug",
            type: "richText",
            localized: true,
            admin: {
                description: "short description that comes below the title. restrict to 1 or two sentences max!"
            }
        },
        // leave fields below till migration strategy has been completed!
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