import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
    }),
    // Define the 'image' field for the skill Image
    defineField({
      name: 'image', // The name of the field
      title: 'Skill Logo', // The title displayed in the Studio
      type: 'image', // The type of the field, which is an image
      options: {
        hotspot: true, // Enable hotspot for the image
      },
    }),

    orderRankField({type: 'skill'}),
  ],
})
