import styles from "../styles/Navbar.module.css";
import Button from "./Button";
import Icon from "./Icon";
import useThemeChange from "../utils/useThemeChange";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useEffect } from "react";

export default function Navbar({ handleSidebar }) {
  // Custom hook to manage the theme and theme change function
  const { theme, handleThemeChange } = useThemeChange();

  // React Router hook to manage navigation
  const navigate = useNavigate();

  // React Router hook to get the current location
  const locacation = useLocation();

  // Effect hook to handle smooth scrolling when clicking on navigation links
  useEffect(() => {
    // Check if the URL contains a hash
    if (location.hash) {
      // Smooth scroll to the target section
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]); // Trigger when the hash in the URL changes

  return (
    <header className={`${styles.navbar} `}>
      <div className={`container ${styles.container}`}>
        <a className="fadeBottom" href="/" style={{ "--delay": 1 }}>
          Mahad Mohamed
        </a>
        <div className={styles.hide}>
          <Button
            icon
            animate
            onClick={handleThemeChange}
            ariaLabel="Theme Toggle"
          >
            <Icon>
              {theme === "light" ? (
                <IoMoonOutline size={20} />
              ) : (
                <FiSun size={20} />
              )}
            </Icon>
          </Button>
          <Button icon animate onClick={handleSidebar} ariaLabel="Menu Toggle">
            <Icon>
              <FiMenu size={20} />
            </Icon>
          </Button>
        </div>
        <div className={styles.links}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 2 }}
              >
                <Link
                  to={locacation.pathname === "/" ? "about" : "/#about"}
                  activeClass="active"
                  spy
                  href="#about"
                  offset={-100}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/#about");
                  }}
                >
                  About
                </Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 3 }}
              >
                <Link
                  to={locacation.pathname === "/" ? "resume" : "/#resume"}
                  activeClass="active"
                  spy
                  offset={-100}
                  href="#resume"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/#resume");
                  }}
                >
                  Resume
                </Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 4 }}
              >
                <Link
                  to={locacation.pathname === "/" ? "projects" : "/#projects"}
                  activeClass="active"
                  spy
                  offset={-100}
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/#projects");
                  }}
                >
                  Projects
                </Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 5 }}
              >
                <Link
                  to={locacation.pathname === "/" ? "contact" : "/#contact"}
                  activeClass="active"
                  spy
                  offset={-100}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/#contact");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.right}>
          <Button icon onClick={handleThemeChange} animate>
            <Icon>
              {theme === "light" ? (
                <IoMoonOutline size={20} />
              ) : (
                <FiSun size={20} />
              )}
            </Icon>
          </Button>
        </div>
      </div>
    </header>
  );
}
