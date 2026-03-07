export const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
            initialValue: 'Electronics Engineer Portfolio',
        },
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            description: 'Main headline on the home page',
        },
        {
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'string',
            description: 'Tagline or description under hero title',
        },
        {
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'heroCTA1',
            title: 'Primary CTA Button Text',
            type: 'string',
            initialValue: 'View Projects',
        },
        {
            name: 'heroCTA2',
            title: 'Secondary CTA Button Text',
            type: 'string',
            initialValue: 'Explore Lab',
        },
        {
            name: 'bio',
            title: 'Bio / About',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
            validation: (Rule) =>
                Rule.custom((value) => {
                    if (value && !/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
                        return 'Invalid email format'
                    }
                    return true
                }),
        },
        {
            name: 'github',
            title: 'GitHub Profile URL',
            type: 'url',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn Profile URL',
            type: 'url',
        },
        {
            name: 'twitter',
            title: 'Twitter/X Profile URL',
            type: 'url',
        },
        {
            name: 'instagram',
            title: 'Instagram Profile URL',
            type: 'url',
        },
        {
            name: 'resumeFile',
            title: 'Resume/CV File',
            type: 'file',
            options: {
                accept: 'application/pdf',
            },
        },
    ],
    preview: {
        select: {
            title: 'siteName',
        },
        prepare(selection) {
            const { title } = selection
            return {
                title: title,
                subtitle: 'Site Configuration',
            }
        },
    },
}
