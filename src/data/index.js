import { Code, Settings, PieChart, Shield } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'API Integration',
    description: 'Seamlessly connect your ecosystem with high-performance, secure REST and GraphQL APIs.',
    icon: Code,
  },
  {
    id: 2,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to scale your infrastructure and optimize workflows.',
    icon: Settings,
  },
  {
    id: 3,
    title: 'Business Process Automation',
    description: 'Leverage AI and modern scripting to eliminate repetitive tasks and boost efficiency.',
    icon: PieChart,
  }
];

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];