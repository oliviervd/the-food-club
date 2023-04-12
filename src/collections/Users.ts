import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true
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