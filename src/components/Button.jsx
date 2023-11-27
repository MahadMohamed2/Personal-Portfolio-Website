import styles from "../styles/Button.module.css";

// Functional component for a customizable button
export default function Button(props) {
  // Destructure the props to get specific properties
  const { icon, fill, big, onClick, animate, ariaLabel } = props;

  // Construct the class name based on the provided props
  const className = `${icon ? styles.iconButton : styles.button} ${
    fill && styles.fill
  } ${big && styles.big} ${animate && "fadeBottom"}`;

  // Define the click handler function
  function handleClick() {
    // Call the provided onClick function if it exists
    return onClick ? props.onClick() : null;
  }

  // Render the button with the constructed class name and click handler
  return (
    <button
      className={className}
      onClick={handleClick}
      style={{ "--delay": 7 }}
      aria-label={ariaLabel || ""}
    >
      {props.children} {/* Render the content inside the button */}
    </button>
  );
}
