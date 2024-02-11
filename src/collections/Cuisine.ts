import {CollectionConfig} from "payload/types";
import notes from "../fields/notes";

const Cuisine: CollectionConfig = {
    slug: "cuisine",
    admin: {
        useAsTitle: "name",
        description: {
            en: "collection of kitchens/cusines used to type venues",
            fr: "collection de cuisines utilisées pour la typologie des lieux",
            nl: "verzameling van keukens om locaties te categoriseren"
        }
    },
    labels: {
        singular: {
            en: "kitchen",
            fr: "cuisine",
            nl: "keuken"
        },
        plural: {
            en: "kitchens",
            fr: "cuisines",
            nl: "keukens"
        }
    },
    access: {
        read: ()=> true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required:true,
            localized: true,
        },
        {
            // categorise tag
            name: "type",
            type: "select",
            required: true,
            admin: {
                description: {
                    en: "select the type to which this category belongs",
                    fr: "sélectionner le type auquel appartient cette catégorie",
                    nl: "selecteer het type waartoe deze categorie behoort"
                }
            },
            options: [
                {
                    label: {
                        en:"drinks",
                        fr:"boissons",
                        nl:"dranken"
                    },
                    value: "drinks"
                },
                {
                    label: {
                        en: "kitchen",
                        fr: "cuisine",
                        nl: "keuken"
                    },
                    value: "cuisine"
                },
                {
                    label: {
                        en: "dish",
                        nl: "gerecht",
                        fr: "plat"
                    },
                    value: "dish"
                }
            ]
        },
        notes
    ]
}

export default Cuisine