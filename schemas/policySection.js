export default {
  name: 'policySection',
  title: 'Policy section',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'sm-block',
    },
    {
      name: 'policies',
      type: 'array',
      of: [{ title: 'Policy', type: 'policy' }],
    },
  ],
};
