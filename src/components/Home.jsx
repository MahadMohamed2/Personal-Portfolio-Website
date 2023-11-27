import styles from "../styles/Home.module.css";
import HomeIcon from "../svgs/HomeIcon";

export default function Home({home}) {
  return (
    <div className={`${styles.home} fadeBottom`} style={{ "--delay": 6 }}>
      <div className={styles.intro}>
        <code>{home?.subtitle}</code>
        <h1>{home?.name}</h1>
      </div>
      <div className={styles.imageContainer}>
        <HomeIcon />
      </div>   
    </div>
  );
}
