import { createElement } from 'react';
import { SiGithub, SiLinkedin, SiBluesky } from 'react-icons/si';

export const links = [
  {
    name: 'Accueil',
    hash: '#home',
    url: '/',
  },
  {
    name: 'A propos',
    hash: '#about',
    url: '/about',
  },
  {
    name: 'Services',
    hash: '#services',
    url: '/products',
  },
  /* {
    name: 'Blog',
    hash: '#blog',
    url: '/blog',
  }, */
] as const;

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/DrHyde01',
    icon: createElement(SiGithub),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/stephane-heyd/',
    icon: createElement(SiLinkedin),
  },
  {
    name: 'BlueSky',
    url: 'https://bsky.app/profile/hydev.bsky.social',
    icon: createElement(SiBluesky),
  },
] as const;

export const experiencesData = [
  {
    title: 'Développeur fullstack (freelance)',
    company: 'Heyd Stefan',
    date: '2021 - Présent',
    description:
      'Développement de sites web et applications web. Conception et création UX / UI',
    stack: ['React', 'NextJS', 'WordPress', 'Figma'],
  },
  {
    title: 'Développeur frontend',
    company: 'La 25ème Heure',
    date: '2024 - Présent',
    description: 'Développement de sites web et applications web.',
    stack: ['React', 'Docker', 'Material UI'],
  },
  {
    title: 'Développeur frontend',
    company: 'Thuria',
    date: '2023 - 2024',
    description:
      'Création de plateformes et de thèmes personnalisés sur Wordpress ayant pour but de promouvoir le tourisme régional',
    stack: ['WordPress'],
  },
  {
    title: 'Développeur fullstack',
    company: 'Advisa',
    date: '2022 - 2023',
    description:
      'Intégration et personnalisation de solutions e - commerce. Création de thèmes ainsi que de plugins sous diverses plateformes.',
    stack: ['Prestashop', 'BigCommerce', 'Magento 1'],
  },
] as const;

export const skillsData = [
  {
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Twig', 'SQL'],
    technologies: {
      frontEnd: ['React', 'NextJS', 'Vue', 'Nuxt', 'Tailwind', 'WordPress'],
      backEnd: ['NodeJS', 'Express', 'MySQL'],
    },
    tools: ['GitHub / GitLab', 'Git', 'Docker', 'Figma'],
  },
] as const;
