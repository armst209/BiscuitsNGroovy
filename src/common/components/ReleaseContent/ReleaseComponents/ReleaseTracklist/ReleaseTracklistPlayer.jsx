//styles
import styles from "./ReleaseTracklistPlayer.module.scss";

const ReleaseTracklistPlayer = ({ songs, setCurrentSongIndex }) => {
  return (
    <ul className={styles["tracklist-ul"]}>
      {songs.map((element, order) => {
        return (
          <li
            className={styles["tracklist-li"]}
            key={`${element.title}-${element.id}`}
            onClick={() => {
              setCurrentSongIndex(songs.indexOf(element));
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
