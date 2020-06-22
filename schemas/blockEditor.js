import { FiImage, FiYoutube } from 'react-icons/fi';
import { BsImages } from 'react-icons/bs';

export default {
  name: 'sm-block',
  title: 'Block content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
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
    {
      type: 'smImage',
      icon: FiImage,
    },
    {
      type: 'slideshow',
      icon: BsImages,
    },
    {
      type: 'youtube',
      icon: FiYoutube,
    },
  ],
};
