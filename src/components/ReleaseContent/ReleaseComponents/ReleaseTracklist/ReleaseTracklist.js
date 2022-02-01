//styles
import styles from "./ReleaseTracklist.module.scss";

const ReleaseTracklist = ({ songs }) => {
  return (
    <ul className={styles["tracklist-ul"]}>
      {songs.map((name, order) => {
        return (
          <li
            className={styles["tracklist-li"]}
            key={`li-key-for-${name}-${order + 1}`}
          >{`${name}`}</li>
        );
      })}
    </ul>
  );
};

export default ReleaseTracklist;
