const Applications = {
    slug: 'applications',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'appliedfor', 'expectedSalary', 'resume', 'createdAt'],
    },

    access: {
        read: ({ req: { user } }) => !!user,
        create: () => true,
        update: () => false,
        delete: ({ req: { user } }) => !!user,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'contact',
            type: 'text',
            required: true,
        },
        {
            name: 'location',
            type: 'text',
            required: true,
        },
        {
            name: 'expectedSalary',
            type: 'select',
            options: ['0-2', '2-4', '4-6', '6-8', '8-10'],
            required: true,
        },
        {
            name: 'appliedfor',
            type: 'text',
            required: true,
        },
        {
            name: 'resume',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }

    ],

};

export { Applications };
