// Import necessary modules and functions from Sanity
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

// Define the 'social' schema type for Sanity
export default defineType({
  name: 'social', // The name of the schema type
  title: 'Social', // The title displayed in the Sanity Studio
  type: 'document', // The type of schema, which is a document
  orderings: [orderRankOrdering], // Define an ordering for the schema documents

  // Define the fields for the 'social' schema
  fields: [
    // Define the 'name' field for the social name
    defineField({
      name: 'name', // The name of the field
      title: 'Social name', // The title displayed in the Studio
      type: 'string', // The type of the field, which is a string
      options: {
        list: [
          {title: 'Instagram', value: 'instagram'}, // Predefined options for 'Instagram'
          {title: 'Twitter (X)', value: 'twitter'}, // Predefined options for 'Twitter (X)'
          {title: 'LinkedIn', value: 'linkedin'}, // Predefined options for 'LinkedIn'
          {title: 'Facebook', value: 'facebook'}, // Predefined options for 'Facebook'
          {title: 'Github', value: 'github'}, // Predefined options for 'Github'
          {title: 'Youtube', value: 'youtube'}, // Predefined options for 'Youtube'
          {title: 'Tumblr', value: 'tumblr'}, // Predefined options for 'Tumblr'

        ],
      },
    }),

    // Define the 'link' field for the social link
    defineField({
      name: 'link', // The name of the field
      title: 'Social Link', // The title displayed in the Studio
      type: 'url', // The type of the field, which is a URL
    }),

    // Define the orderRankField to enable ordering of social entries
    orderRankField({type: 'social'}),
  ],
})
