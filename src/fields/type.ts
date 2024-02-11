import {Field} from "payload/types";

const occasion: Field = {
    name: "type",
    type: "select",
    hasMany: true,
    required: true,
    options: [
        {
            value: "breakfast",
            label: {
                en: "breakfast",
                fr: "petit déjeuner",
                nl: "ontbijt"
            }
        },
        {
            value: "brunch",
            label: "brunch"
        },
        {
            value: "lunch",
            label: "lunch"
        },
        {
            value: "dinner",
            label: "dinner"
        },
        {
            value: "market",
            label: {
                en: "market",
                fr: "marché",
                nl: "markt"
            }
        },
        {
            value: "bar",
            label: "bar"
        }
    ]
}

export default occasion;