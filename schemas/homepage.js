export default {
  title: 'Homepage',
  name: 'homepageContent',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'splashImage',
      title: 'Splash image',
      description:
        'This is the image displayed behind the crest on the homepage',
      type: 'image',
    },
    {
      name: 'principalsWelcome',
      title: 'Principals welcome',
      type: 'sm-block',
    },
    {
      name: 'alert',
      title: 'Alert',
      description:
        'Use this to add an alert to the homepage for important information you need to display.',
      type: 'alert',
    },
    {
      name: 'schoolMotto',
      title: 'Our school motto',
      type: 'sm-block',
    },
  ],
};
