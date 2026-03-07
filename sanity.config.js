import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'Engineering Portfolio CMS',

    projectId: process.env.VITE_SANITY_PROJECT_ID || 'demo',
    dataset: process.env.VITE_SANITY_DATASET || 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
