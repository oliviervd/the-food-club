import {Field} from "payload/types";

const address: Field = {
    name: "address",
    label: "address",
    type: "group",
    fields: [
        {
            name: "street",
            label: "street",
            type: "text",
            required: true
        },
        {
            name: "houseNumber",
            label: "house number",
            type: "text",
            required: true
        },
        {
            name: "city",
            label: "city",
            type: "text",
            required: true,
            defaultValue: ["Gent"]
        },
        {
            name: "postalCode",
            label: "postal code",
            type: "text",
            required: true,
            defaultValue: ["9000"]
        }
    ]
}

export default address