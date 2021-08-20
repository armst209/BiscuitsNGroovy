import { React } from "react";
import "./AlbumPopupStyles.scss";
import MusicPlayer from "../../../../MusicPlayer/MusicPlayer";
import arrow_back from "../../../../../assets/images/arrow-back-yellow.svg";

function AlbumPopup(props) {
  const handleClose = () => {
    props.closeAlbumPopup("");
  };

  return (
    <section id="album-popup">
      <div onClick={handleClose} className="close-album-info">
        <img className="back-arrow" src={arrow_back} alt="arrow" /> Back to
        Portal
      </div>
      <div className="album-popup-container">
        {/* function call to close pop up */}

        <div className="album-popup-content">
          <img src={props.release.art_url} alt={props.release.name} />
          <h1>{props.release.name}</h1>
          <div>{props.release.description}</div>
          <div>{props.release.price}</div>
          <div></div>
        </div>
      </div>
      <div className="music-player">
        <MusicPlayer
          songs={props.release.songs}
          albumName={props.release.name}
          albumCover={props.release.art_url}
        />
      </div>
    </section>
  );
}

export default AlbumPopup;
