export interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  status: 'Fertiggestellt' | 'In Entwicklung' | 'In Planung';
  imageUrl: string;
  description: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}