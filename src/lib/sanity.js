import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your_project_id',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-03-07',
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => {
    if (!source) return null
    return builder.image(source)
}

// GROQ Queries
export const queries = {
    // Get all projects
    allProjects: `*[_type == "project"] | order(publishedDate desc) {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    technologies,
    architectureDiagramImage,
    projectImages,
    githubLink,
    demoLink,
    featured,
    publishedDate
  }`,

    // Get featured projects
    featuredProjects: `*[_type == "project" && featured == true] | order(publishedDate desc) {
    _id,
    title,
    slug,
    shortDescription,
    technologies,
    projectImages[0],
    featured,
    publishedDate
  }`,

    // Get single project by slug
    projectBySlug: (slug) => `*[_type == "project" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    technologies,
    architectureDiagramImage,
    projectImages,
    githubLink,
    demoLink,
    featured,
    publishedDate
  }`,

    // Get all skills grouped by category
    allSkills: `*[_type == "skill"] | order(category, order) {
    _id,
    skillName,
    category,
    icon,
    proficiency
  }`,

    // Get skills by category
    skillsByCategory: (category) => `*[_type == "skill" && category == "${category}"] | order(order) {
    _id,
    skillName,
    category,
    icon,
    proficiency
  }`,

    // Get all blog posts
    allBlogPosts: `*[_type == "blogPost"] | order(publishedDate desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    heroImage,
    publishedDate,
    author
  }`,

    // Get single blog post by slug
    blogPostBySlug: (slug) => `*[_type == "blogPost" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    category,
    heroImage,
    publishedDate,
    author
  }`,

    // Get site settings
    siteSettings: `*[_type == "siteSettings"][0] {
    siteName,
    heroTitle,
    heroSubtitle,
    heroImage,
    heroCTA1,
    heroCTA2,
    bio,
    contactEmail,
    github,
    linkedin,
    twitter,
    instagram,
    resumeFile
  }`,
}
