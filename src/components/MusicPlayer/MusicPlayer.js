import { React, useEffect, useState } from "react";
import "./MusicPlayerStyles.scss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "./PlayerStyles.css";

function MusicPlayer(props) {
  const [audioLists, setAudioList] = useState([]);

  useEffect(() => {
    console.log(props.songs);
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
  }, [props.albumCover, props.albumName, props.songs]);

  return (
    <>
      <ReactJkMusicPlayer
        // icon={{ play: <img src={play_icon} /> }}
        theme="dark"
        preload={true}
        mode={"full"}
        autoPlay={true}
        showDownload={false}
        showThemeSwitch={false}
        showReload={false}
        audioLists={audioLists}
        className="music-player-component"
      />
    </>
  );
}

export default MusicPlayer;
