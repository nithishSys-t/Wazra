const Internships = {
    slug: 'internship',
    access: {
        read: () => true,
        create: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user } }) => user?.role === 'admin',
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'location', type: 'text', default: "WFH", required: false },
        { name: 'experience', type: 'text', default: "fresher", required: true },
        { name: 'Description', type: 'text', required: true },
        { name: 'Requirements', type: 'text', required: true },
    ],
};

export { Internships };
