import {CollectionConfig} from "payload/types";
import address from "../fields/address";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import contentStatus from "../fields/contentStatus";

const Venues:CollectionConfig = {
    slug: "venue",
    admin: {
        useAsTitle: "venueName"
    },
    access: {
        read: hasAccessOrPublished,
        create: isEditor,
        update: isEditor,
        delete: isAdmin
    },
    fields: [
        {
            name: "venueName",
            label: "venue name",
            type: "text",
            required: true
        },
        {
            name: "category",
            type: "relationship",
            relationTo: "categories",
        },
        address,
        contentStatus
    ]
}
export default Venues