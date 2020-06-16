export default {
  name: 'footerLinks',
  title: 'Footer links',
  description:
    'Use this to add links to the "Useful links" section in the footer. The link to Aladdin is added automatically. Drag and drop to reorder.',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        { title: 'Page', type: 'page' },
        { title: 'About page', type: 'aboutPage' },
        { title: 'Policies page', type: 'policiesPage' },
      ],
    },
  ],
};
