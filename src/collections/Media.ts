import {CollectionConfig} from "payload/types";
import path from "path";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import contentStatus from "../fields/contentStatus";
import notes from "../fields/notes";

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
            name: "dish",
            type: "text"
        },
        contentStatus,
        notes
    ]
}

export default Media
