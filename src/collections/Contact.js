const Contact = {
    slug: 'contact',
    admin: {
        useAsTitle: 'fullName',
        defaultColumns: ['fullName', 'email', 'contact', 'subject', 'message', 'createdAt'],
    },
    access: {
        read: () => true,
        create: () => true,
        update: ({ req: { user } }) => user?.role === 'admin',
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        { name: 'fullName', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'contact', type: 'text', required: true },
        { name: 'subject', type: 'text', required: true },
        { name: 'message', type: 'text', required: true }
    ]
}

export { Contact }