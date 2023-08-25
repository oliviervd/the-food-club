import {Field} from "payload/types";

const cuisine:Field = {
    name: "cuisineUsed",
    label: "cuisine(s)",
    admin: {
        description: "pick the appropriate cuisine or cuisines served at this restaurant/venue",
    },
    type: "relationship",
    hasMany: true,
    relationTo: "cuisine"
}

export default cuisine