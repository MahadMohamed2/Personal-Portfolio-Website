import styles from "../styles/Contact.module.css";
import Button from "./Button";
import { useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import ContactImage from "../assets/images/contact.png";

export default function Contact({ contact }) {
  // Custom hook to determine if a particular element is visible on the screen
  const [ref, visible] = useOnScreen({ rootMargin: "100px" });

  // Reference for the form element
  const formRef = useRef();

  // State to manage user input in the form
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Input change handler function
  function handleChange(e) {
    // Extract value and name from the input field
    const { value, name } = e.target;
    // Update the user state with the new input value
    setUser({ ...user, [name]: value });
  }

  return (
    <div
      className={`${styles.message} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="contact"
    >
      <div className={styles.wrapper}>
        <h2>Contact me</h2>
        <p>{contact?.title}</p>
        <div className={styles.divider}>
          {/* Contact form */}
          <form
            className={styles.form}
            ref={formRef}
            action={`https://formsubmit.co/${contact?.email}`}
            method="POST"
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              placeholder="you@example.domain"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={user.message}
              onChange={handleChange}
              placeholder="Message"
              required
            ></textarea>
            {/* Submit button using the Button component */}
            <Button fill type="submit">
              Send it
            </Button>
          </form>
          <div className={styles.imageContainer}>
            <span>
              <img src={ContactImage} alt="Contact Image" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
