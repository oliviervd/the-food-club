import {CollectionConfig} from "payload/types";

import address from "../fields/address";
import cuisine from "../fields/cuisine";
import contentStatus from "../fields/contentStatus";
import pricing from "../fields/pricing";
import review from "../fields/review";
import memberStatus from "../fields/memberStatus";
import notes from "../fields/notes";

import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import catchPhrase from "../fields/catchPhrase";
import occasion from "../fields/type";
import openingHours from "../fields/openingHours";
import category from "../fields/category";

const Venues:CollectionConfig = {
    slug: "venue",
    admin: {
        useAsTitle: "venueName"
    },
    access: {
        read: hasAccessOrPublished,
        create: ()=>true,
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
                {
                  name: "drinks",
                  label: "drinks",
                  type: "relationship",
                  relationTo: "cuisine"
                },
                category
            ]
        },
        {
            type:"row",
            fields: [
                pricing,
                occasion
            ]
        },
        {
            type: "row",
            fields: [
                {
                    name: "website",
                    label: "website",
                    type: "text"
                },
                {
                    name: "phone",
                    label: "phone",
                    type: "text"
                }
            ]
        },
        {
            name: "interiordesign",
            type: "relationship",
            relationTo: "designer",
            hasMany: true,
            defaultValue: "unkown",
            admin: {
                description: "interior design by: "
            }

        },
        catchPhrase,
        review,
        {
          name: "clubOrder",
          type: 'richText'
        },
        {
            name: "media",
            type: "relationship",
            relationTo: "media"
        },
        openingHours,
        address,
        {
            name: "warning",
            type: "text",
            label: "warning",
            admin: {
                description: "if visiting, make sure to take into account the following:.."
            }
        },
        contentStatus,
        memberStatus,
        {
            name: 'vegetarian',
            label: 'vegetarian friendly?',
            type: "checkbox",
            defaultValue: false,
            admin: {
                position: "sidebar",
                description: "does this venue offer vegetarian menu?"
            },
        },
        {
            name: 'vegan',
            label: 'vegan friendly?',
            type: "checkbox",
            defaultValue: false,
            admin: {
                position: "sidebar",
                description: "does this venue offer vegan menu?"
            },
        },
        {
            name:"toVisit",
            label: "to visit",
            admin: {
                position: "sidebar",
                description: "venue that needs to be visited by the foodclub."
            },
            type: "checkbox"
        },
        {
            name: "lastVisit",
            label: "date of last visit",
            type: "date",
            admin: {
                position: "sidebar",
            }
        },
        {
            name: "reservations",
            label: "booking URL",
            type: "text",
            admin: {
                position: "sidebar",
                description: "url to booking service (Resengo or other)"
            }
        },
        notes
    ]
}
export default Venues