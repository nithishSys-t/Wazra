const Subscribers = {
    slug: 'subscribers',
    access: {
        read: () => true,
        create: () => true,
        update: ({ req: { user } }) => user?.role === 'admin',
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        {
            name: 'email',
            type: 'email',
            required: true,
        },
    ],
};

export { Subscribers }
