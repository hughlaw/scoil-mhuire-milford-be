import { FiFileText } from 'react-icons/fi';

export default {
  name: 'attachment',
  title: 'Attachment',
  icon: FiFileText,
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Attachment name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'attachmentDocument',
      title: 'Attachment document',
      type: 'file',
      options: {
        accept: '.pdf, .doc, .docx',
        storeOriginalFilename: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
