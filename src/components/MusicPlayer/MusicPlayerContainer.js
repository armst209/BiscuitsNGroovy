import { useState } from "react";
import MusicPlayer from "./MusicPlayer";

const MusicPlayerContainer = ({ release }) => {
  const [showTrackList, setShowTrackList] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [populateTracklist, setPopulateTracklist] = useState();
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  return (
    <>
      <MusicPlayer
        release={release}
        currentMusicIndex={currentMusicIndex}
        setCurrentMusicIndex={setCurrentMusicIndex}
        showTrackList={showTrackList}
        setShowTrackList={setShowTrackList}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </>
  );
};

export default MusicPlayerContainer;
