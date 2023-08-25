import {Field} from "payload/types";

const openingHours: Field = {
    name: "openOn",
    type: "select",
    hasMany: true,
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
    ]
}

export default openingHours