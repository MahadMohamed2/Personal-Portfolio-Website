import {defineField, defineType} from 'sanity'

// Define the 'home' schema type for Sanity.io
export default defineType({
  name: 'home', // The name of the schema type
  title: 'Home', // The title displayed in the Sanity Studio
  type: 'document', // The type of schema, which is a document

  // Define the fields for the 'home' schema
  fields: [
    // Define the 'name' field
    defineField({
      name: 'name', // The name of the field
      title: 'Name Surname', // The title displayed in the Studio
      type: 'string', // The type of the field, which is a string
    }),

    // Define the 'subtitle' field
    defineField({
      name: 'subtitle', // The name of the field
      title: 'Subtitle', // The title displayed in the Studio
      type: 'text', // The type of the field, which is text (for longer text content)
    }),
  ],
})