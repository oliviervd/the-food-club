import {Field} from "payload/types";

const openingHours: Field = {
    name: "openOn",
    type: "select",
    hasMany: true,
    required: true,
    defaultValue: "UNDEFINED",
    localized: false,
    options: [
        {
            value: "Mo",
            label: {
                en: "Monday",
                fr: "Lundi",
                nl: "maandag"
            }
        },
        {
            value: "Tu",
            label: {
                en: "Tuesday",
                fr: "Mardi",
                nl: "dinsdag"
            }
        },
        {
            value: "We",
            label: {
                en: "Wednesday",
                fr: "Mercredi",
                nl: "woensdag"
            }
        },
        {
            value: "Thu",
            label: {
                en: "Thursday",
                fr: "Jeudi",
                nl: "donderdag"
            }
        },
        {
            value: "Fr",
            label: {
                en: "Friday",
                fr: "Vendredi",
                nl: "vrijdag"
            }
        },
        {
            value: "Sat",
            label: {
                en: "Saturday",
                fr: "Samedi",
                nl: "zaterdag"
            }
        },
        {
            value: "Sun",
            label: {
                en: "Sunday",
                fr: "Dimanche",
                nl: "zondag"
            }
        },
        {
            value: "UNDEFINED",
            label: "UNDEFINED"
        }
    ]
}

export default openingHours