const Logos = {
    slug: 'logos',
    upload: {
        staticDir: 'media/logos',
        mimeTypes: ['image/png', 'image/svg+xml', 'image/webp'],
        adminThumbnail: 'url',
    },
    access: {
        create: () => true,
        read: () => true,
    },
    admin: {
        useAsTitle: 'filename',
    },
    fields: [],
};

export { Logos };
