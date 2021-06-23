import { React, useEffect, useState } from "react";
import "./MusicPlayerStyles.scss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import axios from "axios";

function MusicPlayer() {
  const [showInfo, setShowInfo] = useState();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const baseURL =
  //     "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
  //   axios({
  //     method: "get",
  //     url: `${baseURL}/releases`,
  //     headers: {
  //       "x-access-token": token,
  //     },
  //   })
  //     .then((res) => {
  //       handleSuccess(res);
  //     })
  //     .catch((err) => {
  //       handleFailure(err);
  //     });

  //   const handleSuccess = (res) => {
  //     setShowInfo(console.log(res.data));
  //   };
  //   const handleFailure = (err) => {
  //     console.log(err);
  //   };
  // }, [showInfo]);
  const audio_list = [
    // {
    //   cover: cover,
    //   musicSrc: musicSrc,
    //   name: trackName,
    //   s,
    // },
  ];

  return (
    <div>
      <ReactJkMusicPlayer
        preload={true}
        mode={"full"}
        autoPlay={false}
        remember={true}
        volumeFade={{ fadeIn: 500, fadeOut: 500 }}
        // showDestroy
        // onBeforeDestroy={onBeforeDestroy}
        // onDestroyed={onDestroyed}
        audioLists={audio_list}
        defaultPosition={{ top: 50, left: 50 }}
        toggleMode={true}
        // showDestroy={true}
        className="music-player-component"
      />
      <button onClick={showInfo}>ShowInfo</button>
    </div>
  );
}

export default MusicPlayer;
