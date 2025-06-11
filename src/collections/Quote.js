const Quote = {
    slug: 'quote',
    admin: {
        useAsTitle: 'fullName',
        defaultColumns: ['fullName', 'email', 'contact', 'subject', 'message', 'createdAt'],
    },
    access: {
        read: () => true,
        create: () => true,
        update: ({ req: { user } }) => user?.role === 'admin',
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        { name: 'fullName', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'contact', type: 'text', required: true },
        {
            name: 'subject',
            type: 'select',
            options: [
                "WEB DESIGN & DEVELOPMENT",
                "GRAPHIC DESIGNING",
                "DIGITAL MARKETING",
                "HOSTING SERVICES",
                "GAMING DEVELOPMENT",
                "IOT SOLUTIONS",
                "MACHINE LEARNING SERVICES",
                "RECRUITMENT SERVICES",
                "SOFTWARE DEVELOPMENT SERVICES",
                "APPLICATION DEVELOPMENT",
                "CLOUD CONSULTING SERVICES",
                "VR",
                "AR"
            ],
            required: true,
        },
        { name: 'message', type: 'text', required: true }
    ]
}

export { Quote }