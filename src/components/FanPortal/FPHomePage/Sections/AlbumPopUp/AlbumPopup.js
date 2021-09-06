import { React, useState, useEffect } from "react";
import "./AlbumPopupStyles.scss";
import MusicPlayer from "../../../../MusicPlayer/MusicPlayer.js";
// import MusicPlayerTest from "../../../../MusicPlayer/MusicPlayerTest.tsx";
import arrow_back from "../../../../../assets/images/arrow-back-yellow.svg";
import tracklist_icon from "../../../../../assets/images/tracklist_yellow.svg";
import { motion } from "framer-motion";

function AlbumPopup(props) {
  const [showTrackList, setShowTrackList] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [desktopTracklist, setDesktopTracklist] = useState();
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

  console.log(props.release);
  const handleClose = () => {
    props.closeAlbumPopup("");
  };

  useEffect(() => {
    //looping through for each item in songs array to display track list
    const songsArray = props.release.songs;

    for (let index = 0; index < songsArray.length; index++) {
      <li
        onClick={() => {
          setCurrentMusicIndex(0);
          console.log(currentMusicIndex);
        }}
      ></li>;
    }
  }, []);

  return (
    <section id="album-popup">
      <div className="album-popup-container">
        <div className="album-popup-content">
          <div className="album-content-left">
            <img src={props.release.art_url} alt={props.release.name} />
            <h1>{props.release.name}</h1>
            <div className="album-popup-title">Album Name</div>
          </div>

          <div className="album-content-right">
            <div className="album-popup-tracklist">
              <ul>{desktopTracklist}</ul>
            </div>
            {/* <div className="album-popup-description">
              {props.release.description}
            </div> */}
          </div>
        </div>
        {/* function call to close pop up */}
        <div onClick={handleClose} className="close-album-info">
          <img className="back-arrow" src={arrow_back} alt="arrow" /> X
        </div>
      </div>
      <div className="music-player">
        <MusicPlayer
          currentMusicIndex={currentMusicIndex}
          setCurrentMusicIndex={setCurrentMusicIndex}
          showTrackList={showTrackList}
          setShowTrackList={setShowTrackList}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
          trackListArray={props.release.songs}
          albumName={props.release.name}
          albumCover={props.release.art_url}
        />
        {/* USE/UNCOMMENT IF PRODUCTION PLAYER IS THROWING PLAYBACK ERRORS */}
        {/* <MusicPlayerTest albumTrackList={props.release.songs} /> */}
      </div>
      {showTrackList && (
        <motion.div className="mobile-tracklist-popup">
          <ul>
            <li>TRACK NAME</li>
            <li>TRACK NAME</li>
            <li>TRACK NAME</li>
            <li>TRACK NAME</li>
            <li>TRACK NAME</li>
            <li>TRACK NAME</li>
            <li>TRACK NAME</li>
            <li>TRACK NAME</li>
          </ul>
          <div onClick={() => setShowTrackList(!showTrackList)}>Close</div>
        </motion.div>
      )}
    </section>
  );
}

export default AlbumPopup;
