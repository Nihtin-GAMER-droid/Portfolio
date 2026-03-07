import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'qna453rj',
  dataset: 'production',
  apiVersion: '2024-03-07',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)