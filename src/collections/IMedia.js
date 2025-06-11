const IMedia = {
    slug: 'imedia',
    upload: {
        staticDir: 'imedia',
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


export { IMedia };
