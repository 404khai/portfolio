import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.text({ label: 'Date' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'SWE', value: 'SWE' },
            { label: 'Design case studies', value: 'Design case studies' },
            { label: 'Game dev', value: 'Game dev' },
          ],
          defaultValue: 'SWE',
        }),
        readTime: fields.text({ label: 'Read Time' }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts',
            publicPath: '/images/posts',
          },
          componentBlocks: {
            TerminalBlock: {
              label: 'Terminal Block',
              schema: {
                title: fields.text({ label: 'Title', defaultValue: 'terminal' }),
                command: fields.text({ label: 'Command' }),
                output: fields.text({ label: 'Output', multiline: true }),
              },
              preview: (props) => {
                 // We will define a preview later or use a simple representation
                 return props.fields.command.value 
                   ? `Terminal: ${props.fields.command.value}` 
                   : 'Terminal Block';
              },
            },
          },
        }),
      },
    }),
  },
});
