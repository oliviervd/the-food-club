import {CollectionConfig} from "payload/types";

const Globals = {
    slug: "globals",
    access: {
        read: () => true
    },
    fields:[
        {
            //menu items
            name: "about",
            label: "about",
            type: "group",
            fields: [
                {
                    name: "about",
                    label: {
                        en: "about",
                        fr: "a propos de",
                        nl: "over"
                    },
                    type: "richText",
                    localized: true
                }
            ]
        }
    ]
}

export default Globals;