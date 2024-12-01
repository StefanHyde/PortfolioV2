import { createElement } from 'react';
import { SiGithub, SiLinkedin, SiX, SiBluesky } from 'react-icons/si';

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
  {
    name: 'BlueSky',
    url: 'https://bsky.app/profile/hydev.bsky.social',
    icon: createElement(SiBluesky),
  },
] as const;
