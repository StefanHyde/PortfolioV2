import { createElement } from 'react';
import { SiBluesky, SiGithub, SiLinkedin } from 'react-icons/si';

import cuultImg from '../public/images/25h.png';
import dhdaImg from '../public/images/dhda.png';
import mariergoImg from '../public/images/mariergo.png';
import nctImg from '../public/images/nct.png';

export const links = [
  {
    name: 'accueil',
    hash: '#home',
    url: '',
  },
  {
    name: 'a-propos',
    hash: '#about',
    url: 'about',
  },
  {
    name: 'services',
    hash: '#services',
    url: 'services',
  },
  {
    name: 'blog',
    hash: '#blog',
    url: 'blog',
  },
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
    title: 'developpeur-full-stack',
    company: 'Heyd Stefan',
    date: '2021 - Présent',
    description: 'freelance-description',
    stack: ['React', 'NextJS', 'WordPress', 'Figma'],
  },
  {
    title: 'developpeur-frontend',
    company: 'La 25ème Heure',
    date: '2024 - Présent',
    description: 'la-25eme-heure-description',
    stack: ['React', 'Docker', 'Material UI'],
  },
  {
    title: 'developpeur-frontend',
    company: 'Thuria',
    date: '2023 - 2024',
    description: 'thuria-description',
    stack: ['WordPress'],
  },
  {
    title: 'developpeur-full-stack',
    company: 'Advisa',
    date: '2022 - 2023',
    description: 'advisa-description',
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
    description: `nct-description`,
    services: ['development', 'ux-ui'],
    image: nctImg,
    url: 'https://neoncobratattoo.com',
  },
  {
    title: 'Marie André Ergothérapeute',
    description: `mariergo-description`,
    services: ['development', 'integration'],
    image: mariergoImg,
    url: 'https://m-andre-ergotherapeute.fr/',
  },
  {
    title: 'La 25ème Heure / Cuult',
    description: `cuult-description`,
    services: ['development'],
    image: cuultImg,
    url: 'https://cuult.fr',
  },
  {
    title: 'DHDA',
    description: `dhda-description`,
    services: ['integration', 'development'],
    image: dhdaImg,
    url: 'https://www.deshommesetdesarbres.org/',
  },
] as const;
