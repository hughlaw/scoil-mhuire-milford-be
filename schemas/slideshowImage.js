export default {
  name: 'slideshowImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt text',
      description:
        'Provide some descriptive text for this image for sight impaired users. e.g. "A stack of books placed on a desk" - Don\'t include phrases like "Picture of a" as these are not required.',
      type: 'string',
    },
    {
      name: 'caption',
      type: 'string',
      description: 'A caption displayed below this image (optional)',
    },
  ],
};
