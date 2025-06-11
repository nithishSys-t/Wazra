const Jobs = {
    slug: 'jobs',
    access: {
        read: () => true,
        create: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user } }) => user?.role === 'admin',
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'location', type: 'text', required: true },
        { name: 'experience', type: 'number', required: true },
        { name: 'Description', type: 'text', required: true },
        { name: 'Requirements', type: 'text', required: true },
    ],
};

export { Jobs };
