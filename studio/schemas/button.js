// Define the schema for a button
export default {
  // Specify the name of the schema type
  name: 'button',
  // Specify the type of the schema, which is an 'object'
  type: 'object',
  // Provide a title for this schema type
  title: 'Button',
  // Define the fields associated with this schema type
  fields: [
    {
      // Define the first field named 'name' for the button's name
      name: 'name',
      // Provide a title for the 'name' field
      title: 'Button Name',
      // Specify the type of the 'name' field as 'string' (for text)
      type: 'string',
    },
    {
      // Define the second field named 'link' for the button's link
      name: 'link',
      // Provide a title for the 'link' field
      title: 'Button Link',
      // Specify the type of the 'link' field as 'url' (for web URLs)
      type: 'url',
    },
  ],
}
