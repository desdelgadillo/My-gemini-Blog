
import { BlogPost, Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Consultation', path: 'https://docs.google.com/forms/d/e/1FAIpQLSe6kCnAw-L-RRtAQnJhDFnq2sSwyXxpSoTGh3_LyZHMLtzH9w/viewform?usp=sf_link' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Screen Reader Proficiency Guide',
    description: 'A comprehensive curriculum for NVDA and JAWS beginners, focusing on workplace efficiency.',
    tech: ['Accessibility', 'Education', 'JAWS', 'NVDA'],
  },
  {
    id: '2',
    title: 'Inclusive Design Audit',
    description: 'Detailed analysis of corporate internal tools to ensure compliance with WCAG 2.1 AA standards.',
    tech: ['WCAG', 'Audit', 'UI/UX'],
  },
  {
    id: '3',
    title: 'Braille Literacy Workshop',
    description: 'Series of virtual workshops teaching Unified English Braille (UEB) through tactile graphics.',
    tech: ['Braille', 'Training', 'Tactile Graphics'],
  }
];

// Fix: Updated INITIAL_POSTS to strictly match the BlogPost interface defined in types.ts
export const INITIAL_POSTS: BlogPost[] = [
  {
    _id: 'post-1',
    title: 'Why Web Accessibility is a Human Right',
    slug: { current: 'why-web-accessibility-is-a-human-right' },
    excerpt: 'Exploring the societal impact of digital barriers and how we can advocate for a more inclusive web.',
    body: [], 
    publishedAt: 'Oct 12, 2023',
    // Fix: Author must be an object { name: string } not a string
    author: { name: 'Desmond Delgadillo' },
    mainImage: null,
    categories: [{ title: 'Advocacy' }, { title: 'Accessibility' }]
  },
  {
    _id: 'post-2',
    title: 'Mastering the Braille Display in 2024',
    slug: { current: 'mastering-the-braille-display-in-2024' },
    excerpt: 'A hands-on review of the latest refreshable braille displays and their integration with mobile devices.',
    body: [],
    publishedAt: 'Nov 05, 2023',
    // Fix: Author must be an object { name: string } not a string
    author: { name: 'Desmond Delgadillo' },
    mainImage: null,
    categories: [{ title: 'Hardware' }, { title: 'Assistive Tech' }]
  }
];
