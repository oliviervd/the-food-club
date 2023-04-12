import { CollectionConfig } from 'payload/types';
import {isAdmin, isAdminFieldLevel} from "../access/isAdmin";
import {isAdminOrSelf} from "../access/isAdminOrSelf";

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    create: isAdmin,
    delete: isAdmin
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name:'firstName',
          type:'text',
          label:'first name'
        },
        {
          name:'lastName',
          type:'text',
          label:'last name'
        }
      ]
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      defaultValue: ['user'],
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
      options: [
        {
          label: "Admin",
          value: "admin"
        },
        {
          label: "Editor",
          value: "editor"
        },
        {
          label: "User",
          value: "user"
        }
      ]
    }

  ],
};

export default Users;