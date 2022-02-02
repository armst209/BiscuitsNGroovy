//hashlink import
import { NavHashLink } from "react-router-hash-link";

//styles
import styles from "./NoReleases.module.scss";

const NoLiveReleases = () => {
  return (
    <div id={styles["no-live-releases"]}>
      <p>
        No releases? No problem. Head over to our showcase to start{" "}
        <span>groovin`</span>{" "}
      </p>
      <NavHashLink smooth to="/#music-showcase-return">
        <button className="_button">Head To Showcase</button>
      </NavHashLink>
    </div>
  );
};

export default NoLiveReleases;
