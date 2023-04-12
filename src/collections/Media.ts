import {CollectionConfig} from "payload/types";
import path from "path";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import contentStatus from "../fields/contentStatus";

const Media:CollectionConfig = {
    slug: "media",
    upload : {
        staticDir: path.resolve(__dirname, "../../media"),
        staticURL: "/media"
    },
    access: {
        create: isEditor,
        delete: isAdmin,
        read: hasAccessOrPublished,
        update:isEditor
    },
    fields:[
        {
            name: "alt",
            type: "text"
        },
        {
            name: "depicts",
            type: "relationship",
            relationTo: "venues"
        },
        {
            name: "credits",
            type: "text"
        },
        contentStatus
    ]
}

export default Media
