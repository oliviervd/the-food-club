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
import Category from "../fields/category";

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
                Category
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
            name: "website",
            label: "website",
            type: "text"
        },
        catchPhrase,
        review,
        {
            name: "media",
            type: "relationship",
            relationTo: "media"
        },
        openingHours,
        address,
        contentStatus,
        memberStatus,
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
        notes
    ]
}
export default Venues