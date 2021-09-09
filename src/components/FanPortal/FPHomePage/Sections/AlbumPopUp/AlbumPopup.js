import { React, useState, useEffect } from "react";
import "./AlbumPopupStyles.scss";
import MusicPlayer from "../../../../MusicPlayer/MusicPlayer.js";
// import MusicPlayerTest from "../../../../MusicPlayer/MusicPlayerTest.tsx";
import arrow_back from "../../../../../assets/images/arrow-back-yellow.svg";
import tracklist_icon from "../../../../../assets/images/tracklist_yellow.svg";
import { AnimatePresence, motion } from "framer-motion";
import ComponentLoading from "../../../../Loading/ComponentLoading";

//variants for framer motion
const tracklistAnimations = {
  visible: { y: 0 },
  hidden: { y: 0 },
};

function AlbumPopup(props) {
  const [showTrackList, setShowTrackList] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [populateTracklist, setPopulateTracklist] = useState();
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

  console.log(props.release);
  const handleClose = () => {
    props.closeAlbumPopup("");
  };

  useEffect(() => {
    //mapping through songs array to populate desktop view playlist
    const songsArray = props.release.songs;

    let showReleaseTrackList = songsArray.map((element) => {
      return element ? (
        <li
          onClick={() => {
            setCurrentMusicIndex(songsArray.indexOf(element));
          }}
        >
          {element.title}
        </li>
      ) : (
        <ComponentLoading />
      );
    });
    //passing in songsArray map as a parameter for hook
    setPopulateTracklist(showReleaseTrackList);
  }, [currentMusicIndex, props.release.songs]);

  return (
    <section id="album-popup">
      <div className="album-popup-container">
        <div className="album-popup-content">
          <div className="album-content-left">
            <img src={props.release.art_url} alt={props.release.name} />
            <h1>{props.release.name}</h1>
            <div className="album-popup-title">{props.release.title}</div>
          </div>

          <div className="album-content-right">
            <div className="album-popup-tracklist">
              <ul>{populateTracklist}</ul>
            </div>
          </div>
          {showTrackList && (
            <motion.div
              variants={tracklistAnimations}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                <motion.div className="mobile-tracklist-popup" exit="hidden">
                  <ul>{populateTracklist}</ul>
                  <div onClick={() => setShowTrackList(!showTrackList)}>
                    Close
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
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
    </section>
  );
}

export default AlbumPopup;
