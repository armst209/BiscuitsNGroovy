import { React, useEffect, useState } from "react";
// import "./MusicPlayerStyles.scss";
// import ReactJkMusicPlayer from "react-jinke-music-player";
// import "./PlayerStyles.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import play_btn from "../../assets/images/compact-disc-yellow.svg";

function MusicPlayer(props) {
  // const [audioLists, setAudioList] = useState([]);

  let trackList = props.songs;
  console.log(props.albumName);
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

  const handleClickPrevious = () => {
    setCurrentMusicIndex((prevState) => ({
      currentMusicIndex:
        prevState.currentMusicIndex === 0
          ? trackList.length - 1
          : prevState.currentMusicIndex - 1,
    }));
  };
  const handleClickNext = () => {
    setCurrentMusicIndex((prevState) => ({
      currentMusicIndex:
        prevState.currentMusicIndex < trackList.length - 1
          ? prevState.currentMusicIndex + 1
          : 0,
    }));
  };

  // useEffect((props) => {
  //   let trackListArray = props.songs;
  //   console.log(trackListArray);
  //   // let trackList = [];
  //   // trackListArray.forEach((tracks) => {
  //   //   trackList.push({
  //   //     cover: props.albumCover,
  //   //     name: props.albumName,
  //   //     musicSrc: tracks,
  //   //   });
  //   // });

  //   // setAudioList(trackListListArray);
  // }, [props.albumCover, props.albumName, props.songs]);
  // console.log(audioLists[currentMusicIndex].musicSrc);
  return (
    <>
      <AudioPlayer
        style={{
          width: "100%",
          border: "5px solid var(--color2)",
          borderRadius: "20px",
          background: "black",
          fontFamily: "var(--font1)",
          color: "white",
          textAlign: "center",
        }}
        header={"Now Playing: " + props.albumName}
        autoPlayAfterSrcChange={true}
        showSkipControls={true}
        src={trackList[currentMusicIndex]}
        // onPlay={(e) => console.log("onPlay")}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        // layout="horizontal"
        // other props here
        // customIcons={{ play: play_btn }}
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
