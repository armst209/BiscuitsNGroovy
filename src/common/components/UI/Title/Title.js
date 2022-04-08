//styles
import styles from "./Title.module.scss";

//svg imports
import { ReactComponent as RecordVinyl } from "common/assets/images/compact-disc-yellow.svg";

const Title = ({ title }) => {
  return (
    <div className={styles["title"]}>
      <h1>
        <RecordVinyl />
        <div>{title.toLocaleUpperCase()}</div>
      </h1>
    </div>
  );
};

export default Title;
