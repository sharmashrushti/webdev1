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
        footNote: `
        © ${new Date().getFullYear()} Usha Consulting · All rights reserved. · Made by <a class="text-blue-600 hover:underline dark:text-blue-400" href="https://github.com/sharmashrushti" target="_blank" rel="noopener noreferrer">Shrushti Sharma</a>
};