import {CollectionConfig} from "payload/types";

const Globals = {
    slug: "globals",
    access: {
        read: () => true
    },
    fields:[
        {
            //menu items
            name: "texts",
            type: "array",
            fields: [
                {
                    label: "title",
                    name: "title",
                    type: "string"
                },
                {
                    label: "text",
                    name: "text",
                    type: "richText"
                }
            ]

        }
    ]
}

export default Globals;