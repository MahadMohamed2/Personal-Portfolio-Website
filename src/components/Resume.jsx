import { useState } from "react";
import styles from "../styles/Resume.module.css";
import useOnScreen from "../utils/useOnScreen";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../sanity";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

/* A builder to be able to use images from sanity.io */
const builder = imageUrlBuilder(sanityClient);

// Function to generate image URLs using Sanity.io builder
function urlFor(source) {
  return builder.image(source);
}

export default function Resume({ resume }) {
  // Custom hook to determine if the component is in the viewport
  const [ref, visible] = useOnScreen({ rootMargin: "100px" });

  // State to manage the lightbox (open/close state)
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.experience} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="resume"
    >
      <div className={styles.wrapper}>
        <h2>Resume</h2>

        {/* Display the resume image with a click handler to open the lightbox */}
        {resume?.image !== undefined ? (
          <img
            src={urlFor(resume?.image?.asset._ref)}
            alt={resume?.image?.alt || "Mahad Mohamed"}
            onClick={() => {
              setOpen(true);
            }}
          />
        ) : (
          ""
        )}

        {/* Opening full screen when clicking on images with the Lightbox package */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: urlFor(resume?.image?.asset._ref) }]}
          thumbnails={{ border: 0 }}
          plugins={[Zoom, Counter]}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        />
      </div>
    </div>
  );
}
