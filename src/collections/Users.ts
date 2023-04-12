import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name:'firstName',
          type:'text',
          label:'firs name'
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