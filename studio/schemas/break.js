export default {
  // Define the name of the schema type.
  name: 'break',
  // Specify the type of the schema, which is an 'object.'
  type: 'object',
  // Provide a title for this schema type.
  title: 'Break',
  // Define the fields associated with this schema type.
  fields: [
    {
      // Define a field named 'style.'
      name: 'style',
      // Specify the type of the 'style' field as a 'string.'
      type: 'string',
      // Provide a title for the 'style' field.
      title: 'Break style',
      options: {
        // Define options for the 'style' field, which is a list of choices.
        list: [
          // Define the first choice with a title and value.
          {title: 'Line spacing', value: 'lineSpacing'},
          // Define the second choice with a title and value.
          {title: 'Line break', value: 'lineBreak'},
        ],
      },
    },
  ],
}
