import {defineField, defineType} from 'sanity'

// Define the 'contact' schema type for Sanity.io
export default defineType({
  name: 'contact', // The name of the schema type
  title: 'Contact', // The title displayed in the Sanity Studio
  type: 'document', // The type of schema, which is a document

  // Define the fields for the 'contact' schema
  fields: [
    // Define the 'title' field
    defineField({
      name: 'title', // The name of the field
      title: 'Contact Title', // The title displayed in the Studio
      type: 'text', // The type of the field, which is text (for longer text content)
    }),

    // Define the 'email' field
    defineField({
      name: 'email', // The name of the field
      title: 'Email', // The title displayed in the Studio
      type: 'email', // The type of the field, which is a email
    }),
  ],
})
