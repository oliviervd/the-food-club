import {Field} from "payload/types";

const pricing: Field = {
    name: "pricing",
    type: "select",
    admin: {
        description: "indicative price per head"
    },
    options: [
        {
            value: "€",
            label: "10-20EUR"
        },
        {
            value: "€€",
            label: "20-30EUR"
        },
        {
            value: "€€€",
            label: "30-50EUR"
        },
        {
            value: "€€€€",
            label: "50+"
        }
    ]
}

export default pricing