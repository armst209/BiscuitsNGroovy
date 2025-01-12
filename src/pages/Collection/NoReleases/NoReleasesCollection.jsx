//styles
import styles from "./NoReleasesCollection.module.scss";
//react imports
import { Link } from "react-router-dom";



const NoReleasesCollection = () => {
  return (
    <div id={styles["no-releases-collection"]}>
      <h1>Nothing to see here...yet.</h1>
      <Link to="/#music-showcase">
        <button className="_button">Start Your Collection</button>
      </Link>
    </div>
  );
};

export default NoReleasesCollection;
