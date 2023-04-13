import {CollectionConfig} from "payload/types";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import contentStatus from "../fields/contentStatus";

const Categories:CollectionConfig = {
    slug: "categories",
    admin: {
        useAsTitle: "category",
        description: "category to which the venue belongs (categories used to cluster - and main guidelines through the app)"
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
            type: "text",
            required: true,
        },
        {
            type: "row",
            fields: [
                {
                    name: "briefEN",
                    label: "brief description (English)",
                    type: "richText",
                },
                {
                    name: "briefNL",
                    label: "brief description (Dutch)",
                    type: "richText",
                }
            ]
        },
        {
            name: "image",
            label: "image",
            admin: {
              description: "image/illustration used to depict the category"
            },
            type: "relationship",
            relationTo: "media"
        },
        contentStatus
    ]
}

export default Categories;