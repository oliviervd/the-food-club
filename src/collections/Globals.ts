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

            ]
        }
    ]
}

export default Globals;