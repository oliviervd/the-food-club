import {Field} from "payload/types";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";

const category:Field = {
    name: "category",
    label: "categorie(s)",
    admin: {
        description: "pick the categories to which this venue belongs",
    },
    access: {
        read: () => true
    },
    type: "relationship",
    hasMany: true,
    relationTo: "categories"

}
export default category