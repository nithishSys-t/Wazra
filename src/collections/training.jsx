const Training = {
    slug: 'training',
    admin: {
        useAsTitle: 'fullName',
        defaultColumns: ['fullName', 'email', 'mobile', 'requirement', 'message', 'createdAt'],
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
        { name: 'mobile', type: 'text', required: true },
        {
            name: 'requirement',
            type: 'select',
            options: [
                'Web development training',
                'Digital marketing training',
                'Graphic design training',
                'Mobile application training'
            ],
            required: true,
        },
        { name: 'message', type: 'text', required: true }
    ]
}

export { Training }