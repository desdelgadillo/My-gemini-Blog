
export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  body: any[]; // Portable Text is an array of objects
  publishedAt: string;
  author: {
    name: string;
  };
  mainImage: any;
  categories?: { title: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
