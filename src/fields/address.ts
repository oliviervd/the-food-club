import {Field} from "payload/types";

const address: Field = {
    name: "address",
    type: "group",
    fields: [
        {
            name: "street",
            label: "street",
            type: "text",
            //required: true
        },
        {
            name: "houseNumber",
            label: "house number",
            type: "text",
            //required: true
        },
        {
            name: "city",
            label: "city",
            type: "text",
            //required: true,
            //defaultValue: ["Gent"]
        },
        {
            name: "postalCode",
            label: "postal code",
            type: "text",
            //required: true,
            //defaultValue: ["9000"]
        },
        {
            name: "longitude",
            label: "longitude",
            type: "number"
        },
        {
            name: "latitude",
            label: "latitude",
            type: "number"
        }
    ]
}

export default address