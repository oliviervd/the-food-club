import { CollectionConfig } from "payload/types";
import { isEditor } from "../access/isEditor";
import { isAdmin } from "../access/isAdmin";
import { hasAccessOrPublished } from "../access/hasAccessOrPublished";
import contentStatus from "../fields/contentStatus";
import notes from "../fields/notes";

const Categories: CollectionConfig = {
  slug: "categories",
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
    /*{
      type: "row",
      fields: [
        {
          name: "categoryBrief",
          label: {
            en: "category catchphrase",
            nl: "korte beschrijving categorie",
            fr: "Catégorie Phrase d'accroche"
          },
          localized:true,
          type: "richText"
        },
          // leave these till after migration!
        {
          name: "briefEN",
          label: "brief description (English)",
          type: "richText",
        },
        {
          name: "briefNL",
          label: "brief description (Dutch)",
          type: "richText",
        },
      ],
    },
    {
      name: "image",
      label: {
        en: "image",
        fr: "image",
        nl: "afbeelding"
      },
      admin: {
        description:
            {
              en: "image/illustration used to depict the category",
              fr: "image pour illustrer la catégorie",
              nl: "afbeelding om de categorie te illustreren"
            }
      },
      type: "relationship",
      relationTo: "media",
    },
    */
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

