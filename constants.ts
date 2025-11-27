import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Philosophie', href: '#philosophy' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Profil', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Hafenquartier Hamburg',
    location: 'Hamburg, DE',
    category: 'Wohnen',
    status: 'In Entwicklung',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    description: 'Eine monolithische Neuinterpretation des hanseatischen Backstein-Expressionismus. 45 luxuriöse Wohneinheiten mit Elbblick, die historische Integrität mit nachhaltigem Wohnen verbinden.',
    year: '2025'
  },
  {
    id: 2,
    title: 'Oberegg Lodge',
    location: 'Bayerische Alpen, DE',
    category: 'Hospitality',
    status: 'In Planung',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop',
    description: 'Eine exklusive Eco-Lodge, fokussiert auf Stille und Gelassenheit. Minimalistische Holzbauweise aus regionaler Forstwirtschaft, vollständig energieautark.',
    year: '2026'
  },
  {
    id: 3,
    title: 'Friedrichstraße 204',
    location: 'Berlin-Mitte, DE',
    category: 'Gewerbe',
    status: 'In Entwicklung',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    description: 'Adaptive Umnutzung einer historischen Industriefläche zu einem Arbeits- und Galeriekomplex der nächsten Generation im Herzen der Hauptstadt.',
    year: '2025'
  }
];

export const CONTACT_INFO = {
  email: 'INFO@KOHLHOFFPROJEKTE.DE',
  phone: '+49 175 7430219',
  address: 'Paul-Schröder-Strasse 1, 24229 Dänischenhagen',
  socials: [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' }
  ]
};