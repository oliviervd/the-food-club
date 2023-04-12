import { Access } from "payload/types";
import {User} from "payload/auth";

export const isEditor: Access<any, User> = ({req: {user}}) => {
    // @ts-ignore
    return Boolean(user?.roles?.includes('editor'))
}

