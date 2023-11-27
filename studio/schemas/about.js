import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about', // Define the schema type as 'about'
  title: 'About', // Display name for the schema type
  type: 'document', // Define it as a document type

  // Define fields for the 'about' schema type
  fields: [
    defineField({
      name: 'body', // Field name for the about body
      title: 'About Body', // Display name for the about body field
      type: 'blockContent', // Data type for the about body is 'blockContent'
    }),
    defineField({
      name: 'image', // Field name for the main image
      title: 'Main image', // Display name for the main image field
      type: 'image', // Data type for the main image is an 'image'
      options: {
        hotspot: true, // Enable hotspot functionality for the image
      },
      fields: [
        {
          name: 'alt', // Name of the 'alt' text field
          title: 'Alt text', // Title displayed for 'alt' text field
          type: 'string', // Type of the 'alt' text field, which is a string
          description: 'Important for SEO and accessiblity.', // Description of the field's purpose
        },
      ],
    }),
    // Define the 'images' field as an array of images with hotspot
    defineField({
      name: 'images', // The name of the field
      title: 'Images', // The title displayed in the Studio
      type: 'array', // The type of the field, which is an array
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', title: 'Image Title', type: 'image'},
            {
              name: 'title', // Name of the 'alt' text field
              title: 'Image Title', // Title displayed for 'alt' text field
              type: 'string', // Type of the 'alt' text field, which is a string
            },
            {
              name: 'details', // Name of the 'alt' text field
              title: 'Image Deails', // Title displayed for 'alt' text field
              type: 'text', // Type of the 'alt' text field, which is a string
            },
            {
              name: 'alt', // Name of the 'alt' text field
              title: 'Alt text', // Title displayed for 'alt' text field
              type: 'string', // Type of the 'alt' text field, which is a string
              description: 'Important for SEO and accessiblity.', // Description of the field's purpose
            },
          ],
        },
      ], // The array contains images
      options: {
        hotspot: true, // Enable hotspot for images
      },
    }),
  ],
})
