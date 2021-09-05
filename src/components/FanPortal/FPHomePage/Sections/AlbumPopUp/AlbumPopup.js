import { React, useState } from "react";
import "./AlbumPopupStyles.scss";
import MusicPlayer from "../../../../MusicPlayer/MusicPlayer.js";
// import MusicPlayerTest from "../../../../MusicPlayer/MusicPlayerTest.tsx";
import arrow_back from "../../../../../assets/images/arrow-back-yellow.svg";
import tracklist_icon from "../../../../../assets/images/tracklist_yellow.svg";
import { motion } from "framer-motion";

function AlbumPopup(props) {
  const [showTrackList, setShowTrackList] = useState(false);

  console.log(props.release);
  const handleClose = () => {
    props.closeAlbumPopup("");
  };

  return (
    <section id="album-popup">
      <div className="album-popup-container">
        <div
          className="tracklist-popup"
          onClick={() => setShowTrackList(!showTrackList)}
        >
          <img src={tracklist_icon} alt="tracklist" />
        </div>
        <div className="album-popup-content">
          <div className="album-content-left">
            <img src={props.release.art_url} alt={props.release.name} />
            <h1>{props.release.name}</h1>
            <div className="album-popup-title">Album Name</div>
            {/* function call to close pop up */}
            <div onClick={handleClose} className="close-album-info">
              <img className="back-arrow" src={arrow_back} alt="arrow" /> Back
              to Collection
            </div>
          </div>

          <div className="album-content-right">
            <div className="album-popup-tracklist">
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
            </div>
            {/* <div className="album-popup-description">
              {props.release.description}
            </div> */}
          </div>
        </div>
      </div>
      <div className="music-player">
        <MusicPlayer
          trackListArray={props.release.songs}
          albumName={props.release.name}
          albumCover={props.release.art_url}
        />
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
