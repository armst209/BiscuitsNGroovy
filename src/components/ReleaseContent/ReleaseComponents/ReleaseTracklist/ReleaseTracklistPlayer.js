//styles
import styles from "./ReleaseTracklist.module.scss";

const ReleaseTracklistPlayer = ({ release, setCurrentMusicIndex }) => {
  return (
    <ul className={styles["tracklist-ul"]}>
      {release.songs.map((element, order) => {
        return (
          <li
            className={styles["tracklist-li"]}
            key={`${element.title}-${element.id}`}
            onClick={() => {
              setCurrentMusicIndex(release.songs.indexOf(element));
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
