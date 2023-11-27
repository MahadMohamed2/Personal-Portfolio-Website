import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

// Define the 'category' schema type
export default defineType({
  name: 'category', // The name of the schema type
  title: 'Category', // The title displayed in the Sanity Studio
  type: 'document', // The type of schema, which is a document
  orderings: [orderRankOrdering], // Define an ordering for the schema documents

  // Define the fields for the 'category' schema
  fields: [
    // Define the 'title' field
    defineField({
      name: 'title', // The name of the field
      title: 'Title', // The title displayed in the Studio
      type: 'string', // The type of the field, which is a string
    }),

    // Define the 'description' field
    defineField({
      name: 'description', // The name of the field
      title: 'Description', // The title displayed in the Studio
      type: 'text', // The type of the field, which is text (for longer text content)
    }),

    // Define the orderRankField to enable ordering of projects
    orderRankField({type: 'category'}),
  ],
})
