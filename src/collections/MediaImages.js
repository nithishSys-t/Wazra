const MediaImages = {
    slug: 'media-images',
    upload: {
        staticDir: 'media/images',
        mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
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

export { MediaImages }
