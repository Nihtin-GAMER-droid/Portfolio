export const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'string',
            validation: (Rule) => Rule.max(150),
        },
        {
            name: 'fullDescription',
            title: 'Full Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'technologies',
            title: 'Technologies Used',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Technology Name',
                        },
                        {
                            name: 'icon',
                            type: 'string',
                            title: 'Icon (lucide-react name)',
                        },
                    ],
                },
            ],
        },
        {
            name: 'architectureDiagramImage',
            title: 'Architecture Diagram',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'projectImages',
            title: 'Project Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                    ],
                },
            ],
        },
        {
            name: 'githubLink',
            title: 'GitHub Repository Link',
            type: 'url',
        },
        {
            name: 'demoLink',
            title: 'Live Demo Link',
            type: 'url',
        },
        {
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'publishedDate',
            title: 'Published Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
    ],
    preview: {
        select: {
            title: 'title',
            featured: 'featured',
        },
        prepare(selection) {
            const { title, featured } = selection
            return {
                title: title,
                subtitle: featured ? '⭐ Featured' : 'Project',
            }
        },
    },
}
