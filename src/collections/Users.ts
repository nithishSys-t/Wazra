import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: ({ req: { user } }) => user?.role === 'admin',
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'employee'],
      defaultValue: 'employee',
      required: true,
    },
  ],
}
