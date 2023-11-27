import styles from "../styles/Icon.module.css";

// Functional component for a customizable icon
export default function Icon(props) {
  return <i className={styles.icon}>{props.children}</i>;
}
