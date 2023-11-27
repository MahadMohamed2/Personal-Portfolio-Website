import React from 'react'

import getVideoId from 'get-video-id' // Import a library to extract video ID
import YouTube from 'react-youtube' // Import the React YouTube component

// Preview component for the Sanity Studio
const Preview = (props) => {
  const {url, renderDefault} = props // Extract 'url' and 'renderDefault' from props

  // Check if a YouTube URL is provided
  if (!url) return <div>Missing YouTube URL</div> // Display a message if the URL is missing

  // Extract the video ID from the provided URL using 'getVideoId' library
  const id = getVideoId(url)

  return (
    <div>
      {renderDefault({...props, title: 'YouTube Embed'})}

      {/* Display the embedded YouTube video using the video ID */}
      <YouTube videoId={id.id} />
    </div>
  )
}

// Export a custom schema type for YouTube embedding
export default {
  name: 'youtube', // Name of the custom schema type
  type: 'object', // The schema type is an object
  title: 'YouTube Embed', // The title displayed in Sanity Studio

  // Define fields for the schema type
  fields: [
    {
      name: 'url',
      type: 'url', // Field for entering the YouTube video URL
      title: 'YouTube video URL',
    },
  ],

  // Preview configuration
  preview: {
    select: {
      url: 'url', // Select the 'url' field for preview
    },
  },

  // Specify the preview component to display the YouTube video
  components: {
    preview: Preview,
  },
}
