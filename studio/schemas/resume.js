import {defineField, defineType} from 'sanity'

// Define the 'resume' schema type for Sanity.io
export default defineType({
  name: 'resume', // The name of the schema type
  title: 'Resume', // The title displayed in the Sanity Studio
  type: 'document', // The type of schema, which is a document

  // Define the fields for the 'contact' schema
  fields: [
    // Define the 'image' field as an image with 'alt' text
    defineField({
      name: 'image', // The name of the field
      title: 'Resume Image', // The title displayed in the Studio
      type: 'image', // The type of the field, which is an image
      fields: [
        {
          name: 'alt', // Name of the 'alt' text field
          title: 'Alt text', // Title displayed for 'alt' text field
          type: 'string', // Type of the 'alt' text field, which is a string
          description: 'Important for SEO and accessiblity.', // Description of the field's purpose
        },
      ],
      options: {
        hotspot: true, // Enable hotspot for image
      },
    }),
  ],
})
