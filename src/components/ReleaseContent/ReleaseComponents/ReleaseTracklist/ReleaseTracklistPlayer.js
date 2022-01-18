//styles
import styles from "./ReleaseTracklist.module.scss";

const ReleaseTracklistPlayer = ({ songs, setCurrentMusicIndex }) => {
  return (
    <ul className={styles["tracklist-ul"]}>
      {songs.map((element, order) => {
        return (
          <li
            className={styles["tracklist-li"]}
            key={`${element.title}-${element.id}`}
            onClick={() => {
              setCurrentMusicIndex(songs.indexOf(element));
            }}
          >
            {`${order + 1}. ${element.title}`}
          </li>
        );
      })}
    </ul>
  );
};

export default ReleaseTracklistPlayer;
