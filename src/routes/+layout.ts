import { createKitDocsLoader } from '@svelteness/kit-docs';

export const prerender = true;

export const load: import('./$types').LayoutLoad = createKitDocsLoader({
  sidebar: {
    '/': null,
    '/faqs': '/faqs',
    '/soc-project': '/soc-project',
    '/project-components': '/project-components',
    '/project-blog': '/project-blog',
  },
});