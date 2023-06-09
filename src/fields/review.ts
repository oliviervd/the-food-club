import {Field} from "payload/types";

const review: Field = {
    name: "reviews",
        label: "reviews",
    admin: {
      description: "this is what the food club had to say. - rule number 2. don't argue with the food club."
    },
    type: "group",
    fields: [
        {
            name: "reviewEN",
            label: "review (EN)",
            type: "richText"
        },
        {
            name: "reviewNL",
            label: "review (NL)",
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