import { createElement } from 'react';
import { SiGithub, SiLinkedin, SiBluesky } from 'react-icons/si';
import cuultImg from '../public/images/25h.png';
import dhdaImg from '../public/images/dhda.png';
import nctImg from '../public/images/nct.png';
import mariergoImg from '../public/images/mariergo.png';

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

export const projectsData = [
  {
    title: 'Neon Cobra Tattoo',
    description: `Salon de tatouage ancré depuis des années dans le milieu, Neon Cobra Tattoo a fait appel à mes services afin de gagner en visibilité dans un secteur à très forte concurrence. Grâce à mon expertise couplée de celle d'un expert en SEO ils ont à présent toutes les clés pour gagner en attractivité !`,
    services: ['Développement', 'UX / UI'],
    image: nctImg,
    url: 'https://neoncobratattoo.com',
  },
  {
    title: 'Marie André Ergothérapeute',
    description: `En tant que ergothératpeute Marie nécessitait un site vitrine permettant de présenter son activité et être mise en relation de la manière la plus simple possible. C'est chose faite grâce à un site moderne respectant les normes d'accessibilité.`,
    services: ['Développement', 'UX / UI'],
    image: mariergoImg,
    url: 'https://m-andre-ergotherapeute.fr/',
  },
  {
    title: 'La 25ème Heure / Cuult',
    description: `Afin de constamment faire évoluer leur plateforme de diffusion cinématographique, la 25ème heure a fait appel à mon expérience en développement React pour mettre en place de nouvelles fonctionnalités et améliorer l'expérience utilisateur de leur front et back-office`,
    services: ['Développement'],
    image: cuultImg,
    url: 'https://cuult.fr',
  },
  {
    title: 'DHDA',
    description: `Ayant également travaillé en agence j'ai pu intégrer divers sites web, dans divers domaines. Parmi eux, DHDA, un projet collaboratif valorisant le patrimoine forestier. Un site Wordpress propulsé par l'agence Thuria.`,
    services: ['Intégration', 'Développement'],
    image: dhdaImg,
    url: 'https://www.deshommesetdesarbres.org/',
  },
] as const;
