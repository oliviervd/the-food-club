import {CollectionConfig} from "payload/types";
import address from "../fields/address";
import cuisine from "../fields/cuisine";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import contentStatus from "../fields/contentStatus";
import pricing from "../fields/pricing";

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
            type: "row",
            fields: [
                cuisine,
                pricing,
                {
                    name: "category",
                    type: "relationship",
                    relationTo: "categories",
                },
            ]
        },
        {
            name: "website",
            label: "website",
            type: "text"
        },
        address,
        contentStatus,
        {
            name: "lastVisit",
            label: "date of last visit",
            type: "date",
            admin: {
                position: "sidebar",
            }
        }
    ]
}
export default Venues