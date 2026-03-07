const blogPost = {
    name: 'blogPost',
    title: 'Blog Post / Engineering Notes',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
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
            name: 'author',
            title: 'Author',
            type: 'string',
            initialValue: 'Nithin',
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
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
                {
                    type: 'object',
                    name: 'code',
                    title: 'Code Block',
                    fields: [
                        {
                            name: 'code',
                            title: 'Code',
                            type: 'text',
                        },
                        {
                            name: 'language',
                            title: 'Language',
                            type: 'string',
                            options: {
                                list: [
                                    'javascript',
                                    'python',
                                    'cpp',
                                    'c',
                                    'assembler',
                                    'html',
                                    'css',
                                    'sql',
                                    'bash',
                                    'text',
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'publishedDate',
            title: 'Published Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Embedded Systems', value: 'embedded' },
                    { title: 'Robotics', value: 'robotics' },
                    { title: 'Computer Vision', value: 'vision' },
                    { title: 'Hardware Design', value: 'hardware' },
                    { title: 'Firmware', value: 'firmware' },
                    { title: 'General', value: 'general' },
                ],
            },
        },
    ],
    preview: {
        select: {
            title: 'title',
            date: 'publishedDate',
        },
        prepare(selection) {
            const { title, date } = selection
            return {
                title: title,
                subtitle: date ? new Date(date).toLocaleDateString() : '',
            }
        },
    },
}

export default blogPost