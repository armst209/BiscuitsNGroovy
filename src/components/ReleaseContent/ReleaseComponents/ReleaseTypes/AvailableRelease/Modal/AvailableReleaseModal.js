import { useState, useEffect } from "react";
import "./AvailableReleaseModalStyles.scss";
import { ReactComponent as ArrowBack } from "../../../../../../assets/images/arrow-back-yellow.svg";
import MusicPlayer from "../../../../MusicPlayer/MusicPlayer.js";
import { AnimatePresence, motion } from "framer-motion";

import ComponentLoading from "../../../../../Loading/Component/ComponentLoading";

import ReleaseImage from "../../../ReleaseImage/ReleaseImage";

//variants for framer motion
const tracklistAnimations = {
  visible: { y: 0 },
  hidden: { y: 0 },
};

function AvailableReleseModal({ release }) {
  console.log(release.songs);
  const [showTrackList, setShowTrackList] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [populateTracklist, setPopulateTracklist] = useState();
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  // useEffect(() => {
  //mapping through songs array to populate playlist and numbering song order
  const songsArray = release.songs;

  let showReleaseTrackList = songsArray.map((element, order) => {
    return element ? (
      <li
        key={`li-albumpopup-tracklist-key-for-${element.title}`}
        onClick={() => {
          setCurrentMusicIndex(songsArray.indexOf(element));
        }}
      >
        {`${order + 1}. ${element.title}`}
      </li>
    ) : (
      <ComponentLoading key={`component-loading-key-for${element.title}`} />
    );
  });
  //passing in songsArray map as a parameter for hook
  setPopulateTracklist(showReleaseTrackList);
  // }, []);

  return (
    <section id="album-popup">
      <div className="album-popup-container">
        <div className="album-popup-content">
          <div className="album-content-left">
            <ReleaseImage
              releaseImageSrc={release.art_url}
              releaseAlt={release.name}
            />
            <h1>{release.name}</h1>
            <div className="album-popup-title">{release.title}</div>
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
                  <div className="mobile-tracklist-wrapper">
                    <div
                      className="mobile-tracklist-close"
                      onClick={() => setShowTrackList(!showTrackList)}
                    >
                      X
                    </div>
                    <ul>{populateTracklist}</ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>
        {/* function call to close pop up */}
        <div o className="close-album-info">
          <ArrowBack className="back-arrow" />X
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
          release={release}
        />
      </div>
    </section>
  );
}

export default AvailableReleseModal;
