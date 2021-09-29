import { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "./MusicPlayerStyles.scss";
import tracklist_icon from "../../assets/images/playlist-white-btn.svg";
import record_spin from "../../assets/images/compact-disc-yellow.svg";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function MusicPlayer(props) {
  const [recordSpin, setRecordSpin] = useState("");

  const handleClickPrevious = () => {
    // setting currentMusicIndex to last song in array if on first song
    let firstTrack = props.currentMusicIndex;
    firstTrack === 0
      ? props.setCurrentMusicIndex(props.trackListArray.length - 1)
      : props.setCurrentMusicIndex(props.currentMusicIndex - 1);
  };
  const handleClickNext = () => {
    // setting currentMusicIndex to first song in array if on last song
    let lastTrack = props.currentMusicIndex;
    lastTrack === props.trackListArray.length - 1
      ? props.setCurrentMusicIndex(0)
      : props.setCurrentMusicIndex(props.currentMusicIndex + 1);
  };

  const handleLiSelect = () => {};
  window.addEventListener("click", handleLiSelect, {});

  return (
    <>
      <AudioPlayer
        preload="auto"
        autoPlay={true}
        hasDefaultKeyBindings={true}
        showSkipControls={true}
        showJumpControls={true}
        autoPlayAfterSrcChange={true}
        onPlay={() =>
          setRecordSpin({
            rotate: 360,
            transition: {
              ease: "linear",
              duration: 2,
              repeat: Infinity,
            },
          })
        }
        onPause={() => setRecordSpin({ rotate: 0 })}
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
        header={
          <div className="marquee-wrapper">
            <motion.img
              animate={recordSpin}
              width="30px"
              src={record_spin}
              alt="record"
              style={{ marginRight: ".5rem" }}
            />
            <div className="marquee-header">Now Playing:</div>

            <Marquee
              className="marquee-scroll"
              direction="right"
              gradient={false}
              style={{
                background: "black",
                overflow: "hidden",
                height: "100%",
              }}
            >
              {props.trackListArray[props.currentMusicIndex].name}
            </Marquee>
          </div>
        }
        src={props.trackListArray[props.currentMusicIndex].url}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </>
  );
}

export default MusicPlayer;
