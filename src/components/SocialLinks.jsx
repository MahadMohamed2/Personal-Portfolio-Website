import styles from "../styles/SocialLinks.module.css";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTumblr,
  IoLogoYoutube,
} from "react-icons/io";

export default function SocialLinks({ socials }) {
  return (
    // Container for social media icons with fade animation
    <div className={`${styles.icons} sideFadeBottom`} style={{ "--delay": 12 }}>
      {/* Mapping through socials array and rendering appropriate social media icons with links */}
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
  );
}
