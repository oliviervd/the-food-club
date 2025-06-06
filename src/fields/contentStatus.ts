import {Field} from "payload";

const contentStatus: Field = {
    name: "_status",
    label: "status",
    type: "select",
    required: true,
    defaultValue: ["draft"],
    admin: {
        position: "sidebar"
    },
    options: [
        {
            value:"draft",
            label:"draft"
        },
        {
            value:"pendingReview",
            label:"pending review"
        },
        {
            value:"published",
            label:"published"
        }
    ]
}

export default contentStatus