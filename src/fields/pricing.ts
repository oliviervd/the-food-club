import {Field} from "payload/types";

const pricing: Field = {
    name: "pricing",
    type: "select",
    admin: {
        description: "indicative price range per head - translates to number of € symbols on frontend (one : €, four: €€€€)"
    },
    options: [
        {
            value: "one",
            label: "10-20EUR"
        },
        {
            value: "two",
            label: "20-30EUR"
        },
        {
            value: "three",
            label: "30-50EUR"
        },
        {
            value: "four",
            label: "50+"
        }
    ]
}

export default pricing