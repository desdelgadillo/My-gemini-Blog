
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
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
