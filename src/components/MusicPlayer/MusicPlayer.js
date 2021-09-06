import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { RHAP_UI } from "react-h5-audio-player";
import "./MusicPlayerStyles.scss";
import tracklist_icon from "../../assets/images/playlist-white-btn.svg";

function MusicPlayer(props) {
  // const [playErrorMessage, setPlayErrorMessage] = useState("");
  console.log(props.currentMusicIndex);

  const handleClickPrevious = () => {
    // setting currentMusicIndex to last song in array if on first song
    let firstTrack = props.currentMusicIndex;
    firstTrack == 0
      ? props.setCurrentMusicIndex(props.trackListArray.length - 1)
      : props.setCurrentMusicIndex(props.currentMusicIndex - 1);
  };
  const handleClickNext = () => {
    // setting currentMusicIndex to first song in array if on last song
    let lastTrack = props.currentMusicIndex;
    lastTrack == props.trackListArray.length - 1
      ? props.setCurrentMusicIndex(0)
      : props.setCurrentMusicIndex(props.currentMusicIndex + 1);
  };

  return (
    <>
      <AudioPlayer
        preload="auto"
        autoPlay={true}
        hasDefaultKeyBindings={true}
        showSkipControls={true}
        showJumpControls={true}
        autoPlayAfterSrcChange={true}
        customControlsSection={[
          <div
            className="playlist-button"
            onClick={() => props.setShowTrackList(!props.showTrackList)}
          >
            <img src={tracklist_icon} alt="tracklist" />
          </div>,
          RHAP_UI.ADDITIONAL_CONTROLS,

          RHAP_UI.MAIN_CONTROLS,

          RHAP_UI.VOLUME_CONTROLS,
        ]}
        header={"Now Playing: " + props.albumName}
        src={props.trackListArray[props.currentMusicIndex]}
        // onPlay={(e) => console.log("onPlay")}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        // layout="stacked-reverse"
      />

      {/* <ReactJkMusicPlayer
        preload={true}
        mode={"full"}
        autoPlay={true}
        showDownload={false}
        showThemeSwitch={false}
        showReload={false}
        toggleMode={false}
        audioLists={audioLists}
        className="music-player-component"
      /> */}
    </>
  );
}

export default MusicPlayer;
