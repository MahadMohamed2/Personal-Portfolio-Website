import styles from "../styles/Sidebar.module.css";
import Button from "./Button";
import Icon from "./Icon";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTumblr,
  IoLogoYoutube,
} from "react-icons/io";
import { GrFormClose } from "react-icons/gr";

export default function Sidebar(props) {
  // Destructuring props for ease of use
  const { sidebar, setSidebar, socials } = props;

  // Function to handle sidebar close
  const handleClose = () => {
    setSidebar((sidebar) => !sidebar);
  };

  return (
    // Sidebar container with dynamic styling based on the sidebar state
    <div className={`${styles.sidebar} ${sidebar && styles.active}`}>
      <div className={styles.close}>
        <Button icon onClick={handleClose}>
          <Icon>
            <GrFormClose size={22} />
          </Icon>
        </Button>
      </div>
      <div className={styles.list}>
        {/* Anchor links with click handlers to close the sidebar and navigate to respective sections */}
        <a
          href="/#about"
          className={styles.link}
          onClick={() => {
            handleClose();
            navigate("/#about");
          }}
        >
          About
        </a>
        <a
          href="/#resume"
          className={styles.link}
          onClick={() => {
            handleClose();
            navigate("/#resume");
          }}
        >
          Resume
        </a>
        <a
          href="/#projects"
          className={styles.link}
          onClick={() => {
            handleClose();
            navigate("/#projects");
          }}
        >
          Projects
        </a>
        <a
          href="/#contact"
          className={styles.link}
          onClick={() => {
            handleClose();
            navigate("/#contact");
          }}
        >
          Contact
        </a>
      </div>

      {/* Social media icons */}
      <div className={styles.icons}>
        {/* Mapping through socials array and rendering appropriate icons with links */}
        {socials?.map(
          (social) =>
            social.link != "" && (
              <div key={social._id}>
                {social.name === "instagram" && social.link !== undefined ? (
                  <a
                    href={social.link}
                    aria-label="Open My Instagram Page"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IoLogoInstagram size={24} />
                  </a>
                ) : social.name === "twitter" && social.link !== undefined ? (
                  <a
                    href={social.link}
                    rel="noreferrer noopener"
                    aria-label="Open My Twiter Page"
                    target="_blank"
                  >
                    <FaXTwitter size={24} />
                  </a>
                ) : social.name === "linkedin" && social.link !== undefined ? (
                  <a
                    href={social.link}
                    target="_blank"
                    aria-label="Open My Linkedin Page"
                    rel="noreferrer noopener"
                  >
                    <IoLogoLinkedin size={24} />
                  </a>
                ) : social.name === "facebook" && social.link !== undefined ? (
                  <a
                    href={social.link}
                    aria-label="Open My Facebook Page"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IoLogoFacebook size={24} />
                  </a>
                ) : social.name === "github" && social.link !== undefined ? (
                  <a
                    href={social.link}
                    target="_blank"
                    aria-label="Open My Github Page"
                    rel="noreferrer noopener"
                  >
                    <IoLogoGithub size={24} />
                  </a>
                ) : social.name === "tumblr" && social.link !== undefined ? (
                  <a
                    href={social.link}
                    aria-label="Open My Tumblr Page"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IoLogoTumblr size={24} />
                  </a>
                ) : social.name === "youtube" && social.link !== undefined ? (
                  <a
                    href={social.link}
                    aria-label="Open My Youtube Page"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IoLogoYoutube size={24} />
                  </a>
                ) : (
                  ""
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
