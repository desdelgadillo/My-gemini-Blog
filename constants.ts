
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Consultation', path: '/consultation' }
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
  }
];
