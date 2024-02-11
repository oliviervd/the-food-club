import { CollectionConfig } from "payload/types";
import { isEditor } from "../access/isEditor";
import { isAdmin } from "../access/isAdmin";
import { hasAccessOrPublished } from "../access/hasAccessOrPublished";
import contentStatus from "../fields/contentStatus";
import notes from "../fields/notes";

const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: {
      en: "category",
      nl: "categorie",
      fr: "catégorie"
    },
    plural: {
      en: "categories",
      nl: "categorieen",
      fr: "catégories"
    }
  },
  admin: {
    useAsTitle: "categoryTitle",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "categoryTitle",
      label: {
        nl: "titel categorie",
        fr: "titre de catégorie",
        en: "category title"
      },
      type: "text",
      required: false,
    },
    {
      name: "categorySubTitles",
      label: {
        nl: "ondertitel categorie",
        fr: "catégorie sous-titre",
        en: "category subtitle"
      },
      localized:true,
      type: "text"
    },
    {
      name: "highlight",
      label: "highlight",
      type: "text",
      admin: {
        description: "substring that will be highligted in the UI.",
      },
    },
    contentStatus,
    notes,
    {
      name: "active",
      label: {
        en: "active?",
        nl: "actief?",
        fr: "active?"
      },
      type: "checkbox",
      admin: {
        position: "sidebar",
        description:{
          en: "tick if this category needs to be displayed. - if unticked, the category keeps existing but isn't displayed on the website.",
          fr: "cocher si cette catégorie doit être affichée. - si la case n'est pas cochée, la catégorie continue d'exister mais n'est pas affichée sur le site web.",
          nl: "categorie gebruiken op website?"
        }
      },
    },
  ],
};

export default Categories;

