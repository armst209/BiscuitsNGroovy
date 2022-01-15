//react imports
import { useState } from "react";
import MusicPlayer from "./MusicPlayer";

const MusicPlayerContainer = ({ release }) => {
  //hooks
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

  const { songs } = release; // destructuring songs from release object]

  //handlers
  const previousSongChangeHandler = () => {
    // setting currentMusicIndex to last song in array if on first song
    let firstSongInPlaylistIndex = currentMusicIndex;
    firstSongInPlaylistIndex === 0
      ? setCurrentMusicIndex(songs.length - 1)
      : setCurrentMusicIndex(currentMusicIndex - 1);
  };
  const nextSongChangeHandler = () => {
    // setting currentMusicIndex to first song in array if on last song
    let lastSongInPlaylistIndex = currentMusicIndex;
    lastSongInPlaylistIndex === songs.length - 1
      ? setCurrentMusicIndex(0)
      : setCurrentMusicIndex(currentMusicIndex + 1);
  };

  return (
    <MusicPlayer
      songs={songs}
      previousSongChangeHandler={previousSongChangeHandler}
      nextSongChangeHandler={nextSongChangeHandler}
      currentMusicIndex={currentMusicIndex}
      // setCurrentMusicIndex={setCurrentMusicIndex}
      showTrackList={showTrackList}
      setShowTrackList={setShowTrackList}
      selectedTrack={selectedTrack}
      setSelectedTrack={setSelectedTrack}
    />
  );
};

export default MusicPlayerContainer;
