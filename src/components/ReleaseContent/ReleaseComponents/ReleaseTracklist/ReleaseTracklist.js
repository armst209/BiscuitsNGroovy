//styles
import styles from "./ReleaseTracklist.module.scss";

const ReleaseTracklist = ({ release }) => {
  return (
    <ul>
      {release.songs.map((name, order) => {
        return (
          <li
            className={styles["tracklist-li"]}
            key={`li-key-for-${name}-${order + 1}`}
          >{`${order + 1}. ${name}`}</li>
        );
      })}
    </ul>
  );
};

export default ReleaseTracklist;
