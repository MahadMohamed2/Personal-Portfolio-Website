import styles from "../styles/Footer.module.css";

export default function Footer() {
  // get current year
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {year} <a href="/">Mahad Mohamed</a> — All Rights Reserved
      </p>
    </footer>
  );
}
