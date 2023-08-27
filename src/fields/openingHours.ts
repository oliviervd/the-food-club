import {Field} from "payload/types";

const openingHours: Field = {
    name: "openOn",
    type: "select",
    hasMany: true,
    required: true,
    defaultValue: "UNDEFINED",
    options: [
        {
            value: "Mo",
            label: "Monday"
        },
        {
            value: "Tu",
            label: "Tuesday"
        },
        {
            value: "We",
            label: "Wednesday"
        },
        {
            value: "Thu",
            label: "Thursday"
        },
        {
            value: "Fr",
            label: "Friday"
        },
        {
            value: "Sat",
            label: "Saturday"
        },
        {
            value: "Sun",
            label: "Sunday"
        },
        {
            value: "UNDEFINED",
            label: "UNDEFINED"
        }
    ]
}

export default openingHours