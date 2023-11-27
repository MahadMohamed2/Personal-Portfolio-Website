import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialLinks from "./SocialLinks";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import SanityService from "../services/sanityService";

export default function Layout({ children }) {
  // State to manage the visibility of the sidebar
  const [sidebar, setSidebar] = useState(false);

  // State to store social media links
  const [socials, setSocials] = useState();

  // Function to fetch social media links from Sanity.io
  const getSocials = () => {
    SanityService.getData("social") // Fetch data of type "social" from Sanity.io.
      .then((response) => {
        setSocials(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSocials(); // Call the function to fetch social media links when the component mounts.
  }, []);

  return (
    <>
      {/* Navbar component with a callback function to toggle the sidebar */}
      <Navbar handleSidebar={() => setSidebar((sidebar) => !sidebar)} />

      {/* Sidebar component with visibility state and social media links */}
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} socials={socials} />

      {/* Main content container with social media links and children components */}
      <main className={`container ${styles.layout}`}>
        {/* SocialLinks component to display social media icons and links */}
        <SocialLinks socials={socials} />

        {/* Render the child components */}
        {children}
      </main>

      {/* Footer component */}
      <Footer />
    </>
  );
}
