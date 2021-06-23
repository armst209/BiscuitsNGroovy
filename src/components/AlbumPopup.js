import React from "react";
import "./AlbumPopupStyles.scss";
import Checkout from "../pages/Payment/Checkout";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";

function AlbumPopup(props) {
  const handleClick = () => {
    props.toggle();
  };
  return (
    <section id="album-popup">
      <div className="album-popup-container">
        <div onClick={handleClick} className="close-album-info">
          X
        </div>
        <div className="album-popup-content">
          <h1>{props.name}</h1>
          <div>{props.description}</div>
          <div>{props.price}</div>
          <div>
            <div>
              <Checkout albumName={props.name} albumPrice={props.price} />
            </div>
            <div className="music-player">
              <MusicPlayer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlbumPopup;
