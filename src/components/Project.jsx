import styles from "../styles/Project.module.css";
import Icon from "./Icon";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../sanity";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { Truncate } from "../utils/TruncateText";

/* A builder to be able to use images from sanity.io */
const builder = imageUrlBuilder(sanityClient);

// Function to generate image URLs using Sanity.io builder
function urlFor(source) {
  return builder.image(source);
}

export default function Project({ project }) {
  return (
    <div className={`${styles.project}`}>
      <div className={styles.details}>
        <h3>{Truncate(project?.title, 50)}</h3>
        <div className={styles.description}>
          {Truncate(project?.details, 300)}
        </div>
        <div className={styles.tags}>
          {project?.tags?.map((tag, i) => (
            <code key={i}>{tag}</code>
          ))}
        </div>
        <div className={styles.links}>
          {/* Display GitHub link if available */}
          {project?.github !== undefined ? (
            <a
              href={project?.github}
              target={"_blank"}
              rel="noreferrer noopener"
              aria-label="Github Link"
            >
              <Icon>
                <FiGithub />
              </Icon>
            </a>
          ) : (
            ""
          )}

          {/* Display external link if available */}
          {project?.link !== undefined ? (
            <a
              href={project?.link}
              aria-label="Live Link"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <Icon>
                <HiOutlineExternalLink />
              </Icon>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.imageContainer}>
        {project?.image !== undefined ? (
          <img
            src={urlFor(project?.image.asset._ref)}
            alt={project?.image.alt || "Mahad Mohamed"}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
