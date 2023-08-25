import {Field} from "payload/types";

const Category:Field = {
    name: "category",
    label: "categorie(s)",
    admin: {
        description: "pick the categories to which this venue belongs",
    },
    type: "relationship",
    hasMany: true,
    relationTo: "categories"

}
export default Category