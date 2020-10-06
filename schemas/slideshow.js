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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'slideshowImage' }],
    },
  ],
};
