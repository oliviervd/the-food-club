import {CollectionConfig} from "payload/types";
import path from "path";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import contentStatus from "../fields/contentStatus";
import notes from "../fields/notes";

const Media:CollectionConfig = {
    slug: "media",
    upload: {
        staticURL: "/media",
    },
    access: {
        create: ()=>true,
        delete: isAdmin,
        read: ()=> true,
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
