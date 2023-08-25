import {Field} from "payload/types";

const occasion: Field = {
    name: "type",
    type: "select",
    options: [
        {
            value: "breakfast",
            label: "breakfast"
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
        }
    ]
}

export default occasion;