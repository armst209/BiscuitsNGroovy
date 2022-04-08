//react imports
import { useState } from "react";

//component imports
import ReleaseTracklistPlayer from "../ReleaseComponents/ReleaseTracklist/ReleaseTracklistPlayer";
import MusicPlayer from "./MusicPlayer";

//styles
import styles from "./MusicPlayerContainer.module.scss"

const MusicPlayerContainer = ({ release, togglePlayMusic, forwardedRef }) => {
  //hooks
  const [selectedTrack, setSelectedTrack] = useState("");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const { songs } = release; // destructuring songs from release object

  //handlers
  const previousSongChangeHandler = () => {
    // setting currentMusicIndex to last song in array if on first song
    let firstSongInPlaylistIndex = currentSongIndex;
    firstSongInPlaylistIndex === 0
      ? setCurrentSongIndex(songs.length - 1)
      : setCurrentSongIndex(currentSongIndex - 1);
  };
  const nextSongChangeHandler = () => {
    // setting currentMusicIndex to first song in array if on last song
    let lastSongInPlaylistIndex = currentSongIndex;
    lastSongInPlaylistIndex === songs.length - 1
      ? setCurrentSongIndex(0)
      : setCurrentSongIndex(currentSongIndex + 1);
  };

  return (
    <div id={styles["music-player-container"]}>
      <ReleaseTracklistPlayer
        songs={songs}
        setCurrentSongIndex={setCurrentSongIndex}
      />
      <br></br>
      <MusicPlayer
        forwardedRef={forwardedRef}
        songs={songs}
        togglePlayMusic={togglePlayMusic}
        previousSongChangeHandler={previousSongChangeHandler}
        nextSongChangeHandler={nextSongChangeHandler}
        currentSongIndex={currentSongIndex}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  );
};

export default MusicPlayerContainer;
