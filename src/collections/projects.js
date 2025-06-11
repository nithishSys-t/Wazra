const Projects = {
    slug: 'projects',
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user } }) => user?.role === 'admin',
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media-images',
            required: true,
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media-images',
            required: true,
        }
        ,
        {
            name: 'link',
            type: 'text',
            required: true,
            validate: (val) => {
                try {
                    new URL(val);
                    return true;
                } catch {
                    return 'Invalid URL';
                }
            },
        },
    ],
};


export { Projects }
