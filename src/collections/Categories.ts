import {CollectionConfig} from "payload/types";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import contentStatus from "../fields/contentStatus";

const Categories:CollectionConfig = {
    slug: "categories",
    admin: {
        useAsTitle: "category",
        description: "category to which the venue belongs (categories used to cluster in the app)"
    },
    access: {
        update: isEditor,
        delete: isAdmin,
        create: isAdmin,
        read: hasAccessOrPublished
    },
    fields: [
        {
            name: "category",
            label: "category",
            type: "text"
        },
        contentStatus
    ]
}

export default Categories;