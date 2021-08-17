import { React, useEffect, useState } from "react";
import "./MusicPlayerStyles.scss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

function MusicPlayer(props) {
  const [audioLists, setAudioList] = useState([]);

  useEffect(() => {
    let trackListArray = props.songs;
    console.log(trackListArray);
    let trackList = [];
    trackListArray.forEach((tracks) => {
      trackList.push({
        cover: props.albumCover,
        name: props.albumName,
        musicSrc: tracks,
      });
    });
    setAudioList(trackList);
  }, []);

  return (
    <>
      <ReactJkMusicPlayer
        // getAudioInstance={(instance) => {
        //   setAudioInstance(instance);
        // }}

        preload={true}
        mode={"full"}
        autoPlay={true}
        // remember={true}
        // volumeFade={{ fadeIn: 500, fadeOut: 500 }}
        // showDestroy
        // onBeforeDestroy={onBeforeDestroy}
        // onDestroyed={onDestroyed}
        audioLists={audioLists}
        // defaultPosition={{ top: 50, left: 50 }}
        // toggleMode={true}
        // // showDestroy={true}
        className="music-player-component"
      />
      {/* <button onClick={() => audioInstance.destroy()}>destroy player</button> */}
      {/* <button onClick={showInfo}>ShowInfo</button> */}
    </>
  );
}

export default MusicPlayer;
