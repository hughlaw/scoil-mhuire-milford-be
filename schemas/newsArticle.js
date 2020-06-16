import { FiBell } from 'react-icons/fi';
export default {
  name: 'newsArticle',
  title: 'News / Announcement',
  type: 'document',
  icon: FiBell,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Article URL',
      type: 'slug',
      description:
        'This is a hyphenated string of text used to create a unique URL for this article - use the "Generate" to create one from your title.',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'staffMember' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      description:
        'Add an image for this article. This image is displayed in listings and at the top of the news article page.',
      type: 'smImage',
    },
    {
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description:
        'Use the excerpt to provide a quick description of this article - used on the homepage and main news pages, but not displayed on the full news article page. (200 characters max)',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'articleText',
      title: 'Article text',
      type: 'sm-block',
    },
  ],
};
