import styles from "../styles/About.module.css";
import useOnScreen from "../utils/useOnScreen";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../sanity";
import { PortableText } from "@portabletext/react";
import { components } from "../utils/PortableTextOptions";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";

// Create a builder to generate image URLs from sanity.io
const builder = imageUrlBuilder(sanityClient);

// Function to get the URL for a given image source
function urlFor(source) {
  return builder.image(source);
}

export default function About({ about, skills }) {
  // Custom hook to determine if a particular element is visible on the screen
  const [ref, visible] = useOnScreen({ rootMargin: "100px" });

  // State variables for managing the lightbox
  const [lightbox, setLightbox] = useState({
    open: false, // Indicates whether the lightbox is open or closed
    currentIndex: 0, // Index of the currently displayed image in the lightbox
  });

  // Array to store lightbox image information
  const lightboxItems = [
    about?.images?.map((item) =>
      item?.image !== undefined
        ? {
            src: urlFor(item?.image?.asset._ref), // Creates an array of image sources for the lightbox
            title: item?.title,
            description: item?.details,
          }
        : ""
    ),
  ];

  return (
    <div
      className={`${styles.about} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="about"
    >
      <div className={styles.intro}>
        <code>A Little Bit About Me</code>
        <h2>About Me</h2>
        {about?.body !== undefined ? (
          <div>
            {/* With the @portabletext/react package, we print the description data from Sanity to the screen more regularly. */}
            <PortableText value={about?.body} components={components} />
          </div>
        ) : (
          ""
        )}

        {/* Image carousel using the Swiper package */}
        <Swiper
          spaceBetween={50}
          autoHeight
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          style={{ width: "100%", height: "auto", marginTop: "30px" }}
        >
          {about?.images?.map((item, i) =>
            item?.image !== undefined ? (
              <SwiperSlide
                style={{ cursor: "pointer" }}
                key={i}
                onClick={() =>
                  setLightbox({
                    currentIndex: i,
                    open: true,
                  })
                }
              >
                <img
                  src={urlFor(item?.image.asset._ref)}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "6px",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ) : (
              ""
            )
          )}
        </Swiper>

        <h3 className={styles.listName}>My Skills</h3>
        <ul className={styles.list}>
          {skills?.map((skill) => (
            <li className={styles.item} key={skill?._id}>
              {skill?.image !== undefined ? (
                <img src={urlFor(skill?.image.asset._ref)} alt={skill?.name} />
              ) : (
                ""
              )}
              <p>{skill?.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.imageContainer}>
        {about?.image !== undefined ? (
          <img
            src={urlFor(about?.image.asset._ref)}
            alt={about?.image.alt || "Mahad Mohamed"}
          />
        ) : (
          ""
        )}
      </div>

      {/* Opening full screen when clicking on images with the Lightbox package */}
      <Lightbox
        open={lightbox.open}
        close={() => setLightbox({ open: false, currentIndex: 0 })}
        slides={lightboxItems[0]}
        thumbnails={{ border: 0 }}
        plugins={[Zoom, Counter, Captions]}
        index={lightbox.currentIndex}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
      />
    </div>
  );
}
