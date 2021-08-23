// import "./MusicPlayerStyles.scss";
// import ReactJkMusicPlayer from "react-jinke-music-player";
// import "./PlayerStyles.css";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "./MusicPlayerStyles.scss";

function MusicPlayer(props) {
  // const [audioLists, setAudioList] = useState([]);
  // const [playErrorMessage, setPlayErrorMessage] = useState("");
  console.log(props.trackListArray);

  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

  const handleClickPrevious = (props) => {
    setCurrentMusicIndex(currentMusicIndex - 1);
  };
  const handleClickNext = () => {
    setCurrentMusicIndex(currentMusicIndex + 1);
  };

  // useEffect(
  //   (props) => {
  //     let trackListArray = props.songs;
  //     console.log(trackListArray);
  //     let trackList = [];
  //     trackListArray.forEach((tracks) => {
  //       trackList.push({
  //         cover: props.albumCover,
  //         name: props.albumName,
  //         musicSrc: tracks,
  //       });
  //     });

  //     // setAudioList(trackListListArray);
  //   },
  //   [props.albumCover, props.albumName, props.songs]
  // );

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
        preload="auto"
        hasDefaultKeyBindings={true}
        autoPlayAfterSrcChange={true}
        showSkipControls={true}
        showJumpControls={false}
        header={"Now Playing: " + props.albumName}
        src={props.trackListArray[currentMusicIndex]}
        // onPlay={(e) => console.log("onPlay")}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        // layout="stacked-reverse"
        // other props here
        // onError={setPlayErrorMessage("Could not load music file")}
        // onPlayError={setPlayErrorMessage("Play error occured")}
        // defaultCurrentTime="Loading"
        // defaultDuration="Loading"
        // customIcons={{
        //   play: "playBtn",
        // }}
        // customAdditionalControls={[]}
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
