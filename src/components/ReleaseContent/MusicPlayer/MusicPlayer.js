//react imports
import { useState } from "react";

//react-h5-audio player imports
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

//styles
import "./MusicPlayerStyles.scss";

//svg imports
import { ReactComponent as TracklistIcon } from "../../../assets/images/playlist-white-btn.svg";

//component imports
import MarqueeWrapper from "./Marquee/MarqueeWrapper";

const MusicPlayer = ({
  songs,
  previousSongChangeHandler,
  nextSongChangeHandler,
  currentSongIndex,
}) => {
  const [recordImageClass, setRecordImageClass] = useState("");

  //handlers
  const startImageRotationClassHandler = () => {
    setRecordImageClass("rotate");
  };
  const stopeImageRotationClassHandler = () => {
    setRecordImageClass("");
  };

  // const handleLiSelect = () => {};
  // window.addEventListener("click", handleLiSelect, {});

  return (
    <AudioPlayer
      preload="auto"
      autoPlay={true}
      hasDefaultKeyBindings={true}
      showSkipControls={true}
      showJumpControls={true}
      autoPlayAfterSrcChange={true}
      onPlay={() => startImageRotationClassHandler()}
      onPause={() => stopeImageRotationClassHandler()}
      customControlsSection={[
        // <div
        //   className="playlist-button"
        //   onClick={() => props.setShowTrackList(!props.showTrackList)}
        // >
        //   <TracklistIcon />
        // </div>,
        RHAP_UI.ADDITIONAL_CONTROLS,

        RHAP_UI.MAIN_CONTROLS,

        RHAP_UI.VOLUME_CONTROLS,
      ]}
      header={
        <MarqueeWrapper recordImageClass={recordImageClass}>
          {songs[currentSongIndex].title}
        </MarqueeWrapper>
        // <div className="marquee-wrapper">
        //   <motion.img
        //     animate={recordSpin}
        //     width="30px"
        //     src={record_spin}
        //     alt="record"
        //     style={{ marginRight: ".5rem" }}
        //   />
        //   <div className="marquee-header">Now Playing:</div>

        //   <Marquee
        //     className="marquee-scroll"
        //     direction="right"
        //     gradient={false}
        //     style={{
        //       background: "black",
        //       overflow: "hidden",
        //       height: "100%",
        //     }}
        //   >
        //     {props.trackListArray[props.currentMusicIndex].title}
        //   </Marquee>
        // </div>
      }
      src={songs[currentSongIndex].url} // current song url to add to player
      onClickPrevious={previousSongChangeHandler}
      onClickNext={nextSongChangeHandler}
      onEnded={nextSongChangeHandler}
    />
  );
};

export default MusicPlayer;
