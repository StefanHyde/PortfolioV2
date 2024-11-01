import React from 'react';
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
    icon: React.createElement(SiGithub),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/stephane-heyd/',
    icon: React.createElement(SiLinkedin),
  },
  {
    name: 'Twitter',
    url: 'https://x.com/DrHyde01',
    icon: React.createElement(SiX),
  },
] as const;

export const bento = [
  {
    title: 'Bento',
    description: 'A simple and lightweight CSS framework',
    icon: 'Bento',
  },
  {
    title: 'Bento',
    description: 'A simple and lightweight CSS framework',
    icon: 'Bento',
  },
  {
    title: 'Bento',
    description: 'A simple and lightweight CSS framework',
    icon: 'Bento',
  },
  {
    title: 'Bento',
    description: 'A simple and lightweight CSS framework',
    icon: 'Bento',
  },
  {
    title: 'Bento',
    description: 'A simple and lightweight CSS framework',
    icon: 'Bento',
  },
] as const;
