export default {
  title: 'Slideshow',
  name: 'slideshow',
  type: 'object',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      description: 'Adds a title above the slideshow (optional)',
      type: 'string',
    },
    {
      name: 'intro',
      description: 'Introduction text displayed above your slidehow images',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'String', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'slideshowImage' }],
      validation: (Rule) => Rule.required().min(2),
    },
  ],
};
