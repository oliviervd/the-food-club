import {CollectionConfig} from "payload/types";
import address from "../fields/address";
import cuisine from "../fields/cuisine";
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
        cuisine,
        {
            name: "website",
            label: "website",
            type: "text"
        },
        {
            name: "category",
            type: "relationship",
            relationTo: "categories",
        },
        address,
        contentStatus,
        {
            name: "last visit",
            label: "date of last visit",
            type: "date",
            admin: {
                position: "sidebar",
            }
        }
    ]
}
export default Venues