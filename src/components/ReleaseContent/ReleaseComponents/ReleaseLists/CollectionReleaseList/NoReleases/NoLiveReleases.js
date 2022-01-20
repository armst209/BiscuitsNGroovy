//hashlink import
import { NavHashLink } from "react-router-hash-link";

//component imports
import Button from "../../../../../WrapperComponents/Button/Button";

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
        <Button className="_button" width="200px">
          Head To Showcase
        </Button>
      </NavHashLink>
    </div>
  );
};

export default NoLiveReleases;
