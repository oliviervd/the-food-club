import {Field} from "payload/types";

const pricing: Field = {
    name: "pricing",
    type: "select",
    options: [
        {
            value: "cheap",
            label: "10-20EUR"
        },
        {
            value: "midrange",
            label: "20-40EUR"
        },
        {
            value: "expensive",
            label: "40EUR+"
        }
    ]
}

export default pricing