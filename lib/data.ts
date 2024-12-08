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
  {
    name: 'Blog',
    hash: '#blog',
    url: '/blog',
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
