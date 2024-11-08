import { createElement } from 'react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export const links = [
  {
    name: 'Accueil',
    hash: '#home',
    url: '/',
  },
  {
    name: 'A propos',
    hash: '#about',
    url: '/',
  },
  {
    name: 'Projets',
    hash: '#projects',
    url: '/',
  },
  {
    name: 'Blog',
    hash: '#blog',
    url: '/',
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
    name: 'Twitter',
    url: 'https://x.com/DrHyde01',
    icon: createElement(SiX),
  },
] as const;

export const introBento = [
  {
    title: 'Site web',
    icon: '🧑‍💻',
    description: `Un site destiné à promouvoir votre activité, un site e-commerce pour
                vendre vos créations, ou un blog pour partager vos passions ? Je
                vous accompagne dans le developpement de votre projet.`,
    gridTemplate: 'row-span-3',
    flexTemplate: 'flex flex-col',
    textTemplate: '',
    gradientTemplate:
      'bg-gradient-to-br from-primary-50 dark:from-primary-950 to-transparent',
  },
  {
    title: 'Application',
    description: `Au delà d'un site web, une application peut être un atout
            considérable pour votre développement !`,
    icon: '⚙️',
    gridTemplate: 'row-span-2',
    flexTemplate: '',
    textTemplate: 'text-center',
    gradientTemplate:
      'bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent',
  },
  {
    title: 'Döner kebab',
    description: 'Salade tomates oignons chef',
    icon: '🥙',
    gridTemplate: 'row-span-1',
    flexTemplate: '',
    textTemplate: 'text-center',
    gradientTemplate:
      'bg-gradient-to-t from-primary-50 dark:from-primary-950 to-transparent',
  },
  {
    title: 'Maraboutage',
    description: `Parce qu'on sait jamais.`,
    icon: '🧙',
    gridTemplate: 'row-span-1',
    flexTemplate: '',
    textTemplate: 'text-end',
    gradientTemplate:
      'bg-gradient-to-bl from-primary-50 dark:from-primary-950 to-transparent',
  },
  {
    title: 'UX / UI',
    description: `La conception d'une maquette est une étape cruciale dans la
            création de votre site web ou application. Je vous propose des
            maquettes modernes et ergonomiques respectant les standards actuels`,
    icon: '🌈',
    gridTemplate: 'row-span-2',
    flexTemplate: '',
    textTemplate: 'text-end',
    gradientTemplate:
      'bg-gradient-to-tl from-primary-50 dark:from-primary-950 to-transparent',
  },
] as const;
