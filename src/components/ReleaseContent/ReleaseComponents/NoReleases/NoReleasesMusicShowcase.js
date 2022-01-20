//styles
import styles from "./NoReleasesMusicShowcase.module.scss";
import { Link } from "react-router-dom"

const NoReleasesMusicShowcase = () => {
  return (
    <div id={styles["no-releases-music-showcase"]}>
      Nothing to see here! Check back soon for new releases!
      <br/>
      <br/>
      See our past releases <Link to="/vault">HERE</Link>
    </div>
  );
};

export default NoReleasesMusicShowcase;
