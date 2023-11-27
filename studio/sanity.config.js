import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default', // The name of the Sanity Studio project
  title: 'mahadmohamed', // The title of the project

  projectId: 'g98ubwh6', // The unique identifier for the project
  dataset: 'production', // The name of the dataset

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Mahad Mohamed CMS') // Title for the studio content
          .items([
            S.listItem()
              .title('Home')
              .id('home')
              .child(S.document().schemaType('home').documentId('home')), // Define a "Home" section

            S.listItem()
              .title('About')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')), // Define an "About" section

            S.listItem()
              .title('Contact')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact')), // Define a "Contact" section

            S.listItem()
              .title('Resume')
              .id('resume')
              .child(S.document().schemaType('resume').documentId('resume')), // Define a "resume" section

            orderableDocumentListDeskItem({type: 'skill', S, context, title: 'Skills'}), // Define a "Skills" section

            orderableDocumentListDeskItem({type: 'project', S, context, title: 'Projects'}), // Define a "Projects" section

            orderableDocumentListDeskItem({type: 'social', S, context, title: 'Socials'}), // Define a "Socials" section

            orderableDocumentListDeskItem({
              type: 'category',
              S,
              context,
              title: 'Project Categories',
            }),
          ])
      },
    }),
    visionTool(), // Vision plugin for image and media management
  ],

  schema: {
    types: schemaTypes, // Define schema types for the project
  },
})
