import {Access} from "payload/types";

export const isAdminOrSelf: Access = ({req: { user } }) => {
    // if logged in?
    if (user) {
        // user has role admin?
        if (user.roles?.includes("admin")) {
            return true;
        }

        // if not role admin; only provide access to themselves
        return {
            id: {
                equals: user.id
            }
        }
    }

    // reject everyone else
    return false;
}