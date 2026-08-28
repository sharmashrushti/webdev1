import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Who We Are', href: getPermalink('/about') },
    { text: 'Our Services', href: getPermalink('/services') },
    { text: 'FAQs', href: getPermalink('/faqs') },
    { text: 'Contact Us', href: getPermalink('/contact') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} Usha Consulting · All rights reserved.
  `,
}; 
