import { Access } from "payload/types";

export const hasAccessOrPublished: Access = ({req: {user}}) => {
    if (user) {
        if(user.roles.includes('admin')) return true;
        if(user.roles.includes('editor')) return true;
    }

    return{
        _status: {
            equals: 'published'
        }
    }
}