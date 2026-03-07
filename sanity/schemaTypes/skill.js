export const skill = {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'skillName',
            title: 'Skill Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Microcontrollers', value: 'microcontrollers' },
                    { title: 'Robotics', value: 'robotics' },
                    { title: 'Embedded Systems', value: 'embedded-systems' },
                    { title: 'Computer Vision', value: 'computer-vision' },
                    { title: 'RF Communication', value: 'rf-communication' },
                    { title: 'Sensor Systems', value: 'sensor-systems' },
                    { title: 'Tools & Languages', value: 'tools-languages' },
                    { title: 'Frameworks', value: 'frameworks' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'icon',
            title: 'Icon (lucide-react name)',
            type: 'string',
            description: 'e.g., Cpu, Zap, Wifi, Camera, Radio, Sensor',
        },
        {
            name: 'proficiency',
            title: 'Proficiency Level',
            type: 'string',
            options: {
                list: [
                    { title: 'Expert', value: 'expert' },
                    { title: 'Advanced', value: 'advanced' },
                    { title: 'Intermediate', value: 'intermediate' },
                    { title: 'Learning', value: 'learning' },
                ],
            },
            initialValue: 'advanced',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
        },
    ],
    preview: {
        select: {
            title: 'skillName',
            category: 'category',
        },
        prepare(selection) {
            const { title, category } = selection
            return {
                title: title,
                subtitle: category,
            }
        },
    },
}
