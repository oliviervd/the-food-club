import {CollectionConfig} from "./CollectionConfig";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";

const TheClub: CollectionConfig = {
    slug:"the-club",
    label:"The Club",
    access: {
        read: hasAccessOrPublished,
        create: ()=>true,
        update: isEditor,
        delete: isAdmin
    },
    fields: []
}
export default TheClub;