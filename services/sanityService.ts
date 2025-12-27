
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  // REPLACE THESE with your actual project data from sanity.io/manage
  projectId: 'your_project_id', 
  dataset: 'production',
  useCdn: true, // `false` if you want fresh data every time
  apiVersion: '2023-10-12',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
