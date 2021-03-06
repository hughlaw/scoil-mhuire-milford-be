export default {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'navigation',
      type: 'navigation',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'tel1',
      title: 'Landline contact number',
      type: 'string',
      description:
        'Contact phone number as you would like it displayed on screen',
    },
    {
      name: 'tel1raw',
      title: 'Landline contact number (non formatted)',
      type: 'string',
      description:
        'The raw phone number as you would type it into a phone - this is used to construct a link with the correct format e.g +353749153494',
    },
    {
      name: 'tel2',
      title: 'Mobile contact number',
      type: 'string',
      description:
        'Contact phone number as you would like it displayed on screen',
    },
    {
      name: 'tel2raw',
      title: 'Mobile contaxt number (non formatted)',
      type: 'string',
      description:
        'The raw phone number as you would type it into a phone - this is used to construct a link with the correct format e.g +353871894920',
    },
    {
      name: 'contactEmail',
      title: 'Contact email address',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          { name: 'email' }
        ),
    },
    {
      name: 'twitter',
      title: 'Twitter username',
      description: 'Your twitter username (without the @ symbol)',
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'Facebook username',
      description: "The school's facebook username",
      type: 'string',
    },
    {
      name: 'footerLinks',
      type: 'footerLinks',
    },
  ],
};
