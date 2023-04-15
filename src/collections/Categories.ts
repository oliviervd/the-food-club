import {CollectionConfig} from "payload/types";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import contentStatus from "../fields/contentStatus";
import notes from "../fields/notes";

const Categories:CollectionConfig = {
    slug: "categories",
    admin: {
        useAsTitle: "category",
        description: "category to which the venue belongs (categories used to cluster - and main guidelines through the app)"
    },
    access: {
        update: isEditor,
        delete: isAdmin,
        create: ()=>true,
        read: hasAccessOrPublished
    },
    fields: [
        {
            name: "categoryTitle",
            label: "category title",
            type: "text",
            required: true,
        },
        {
            name: "categorySubTitle",
            label: "category subtitle",
            type: "text",
            admin: {
                description: "catchphrase that goes along with the title, a slur of sorts."
            }
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
        contentStatus,
        notes
    ]
}

export default Categories;