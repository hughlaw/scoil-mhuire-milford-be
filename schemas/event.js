import { FiCalendar } from 'react-icons/fi';

export default {
  name: 'event',
  title: 'Event',
  icon: FiCalendar,
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Event URL',
      type: 'slug',
      description:
        'This is a hyphenated string of text used to create a unique URL for this event\'s page - use the "Generate" button to create one from your title.',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'startDate',
      type: 'datetime',
      description:
        'Select when this event starts - if the time is not important, select any time at all and make sure the "Include times in event listings" toggle is turned off below.',
      options: {
        dateFormat: 'DD/MM/YYYY',
        timeStep: 5,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      type: 'datetime',
      options: {
        dateFormat: 'DD/MM/YYYY',
        timeStep: 5,
      },
    },
    {
      name: 'showTimes',
      title: 'Include times in event listings',
      type: 'boolean',
    },
    {
      name: 'image',
      description:
        'Add an image for this event. This image is displayed in listings and at the top of the event page.',
      type: 'smImage',
    },
    {
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description:
        'Use the excerpt to provide a quick description of this event - used on the homepage and main event pages, but not displayed on the full news event description page. (200 characters max)',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'eventDescription',
      title: 'Event description',
      type: 'sm-block',
    },
  ],
  initialValue: {
    showTimes: false,
  },
};
