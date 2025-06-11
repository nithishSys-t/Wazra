const Media = {
    slug: 'media',
    upload: {
        staticDir: 'media',
        mimeTypes: [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ],
        adminThumbnail: 'thumbnail',
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


export { Media };
