//react imports
import { useState } from "react";
import ReleaseTracklistPlayer from "../ReleaseComponents/ReleaseTracklist/ReleaseTracklistPlayer";
import MusicPlayer from "./MusicPlayer";

const MusicPlayerContainer = ({ release }) => {
  //hooks
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
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
    <>
      <ReleaseTracklistPlayer
        songs={songs}
        setCurrentSongIndex={setCurrentSongIndex}
      />
      <br></br>
      <MusicPlayer
        songs={songs}
        previousSongChangeHandler={previousSongChangeHandler}
        nextSongChangeHandler={nextSongChangeHandler}
        currentSongIndex={currentSongIndex}
        // setCurrentMusicIndex={setCurrentMusicIndex}
        // showTrackList={showTrackList}
        // setShowTrackList={setShowTrackList}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </>
  );
};

export default MusicPlayerContainer;
