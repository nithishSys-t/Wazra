const IApplications = {
    slug: 'iapplications',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'appliedfor', 'resume', 'createdAt'],
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
            name: 'Expertizein',
            type: 'select',
            options: ['front-end', 'back-end', 'full-stack', 'marketing', 'android'],
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
            relationTo: 'imedia',
            required: true,
        }

    ],

};

export { IApplications };
