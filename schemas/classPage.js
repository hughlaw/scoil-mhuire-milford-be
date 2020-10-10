import { FiClipboard } from 'react-icons/fi';

export default {
  name: 'classPage',
  title: 'Class page',
  type: 'document',
  icon: FiClipboard,
  orderings: [
    {
      title: 'Sort ordering',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Page URL',
      description:
        'A slug is a generated string of text used to create unique URL for this page',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'teacher',
      title: 'Teacher',
      type: 'reference',
      to: [{ type: 'staffMember' }],
    },
    {
      name: 'pageContent',
      title: 'Page content',
      type: 'sm-block',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sortOrder',
      title: 'Sort ordering',
      description:
        'Use this to sort the order of these pages when on the classes page',
      type: 'number',
      options: {
        list: [
          {
            value: 1,
            title: '1 - Top',
          },
          {
            value: 2,
            title: '2',
          },
          {
            value: 3,
            title: '3',
          },
          {
            value: 4,
            title: '4',
          },
          {
            value: 5,
            title: '5',
          },
          {
            value: 6,
            title: '6',
          },
          {
            value: 7,
            title: '7',
          },
          {
            value: 8,
            title: '8',
          },
          {
            value: 9,
            title: '9',
          },
          {
            value: 10,
            title: '10 - Bottom',
          },
        ],
      },
    },
  ],
};
