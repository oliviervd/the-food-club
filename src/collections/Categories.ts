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
      label: "category title",
      type: "text",
      required: false,
    },
    {
      name: "categorySubTitle",
      label: "category subtitle",
      type: "text",
      admin: {
        description:
          "catchphrase that goes along with the title, a slur of sorts.",
      },
    },
    {
      name: "highlight",
      label: "highlight",
      type: "text",
      admin: {
        description: "substring that will be highligted in the UI.",
      },
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
        },
      ],
    },
    {
      name: "image",
      label: "image",
      admin: {
        description: "image/illustration used to depict the category",
      },
      type: "relationship",
      relationTo: "media",
    },
    contentStatus,
    notes,
    {
      name: "active",
      label: "active",
      type: "checkbox",
      admin: {
        position: "sidebar",
        description:
          "tick if this category needs to be displayed. - if unticked, the category keeps existing but isn't displayed on the website.",
      },
    },
  ],
};

export default Categories;

