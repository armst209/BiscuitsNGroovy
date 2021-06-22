import React from "react";
import "./AlbumPopupStyles.scss";
import Checkout from "../pages/Payment/Checkout";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

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
            <Checkout albumName={props.name} albumPrice={props.price} />
          </div>
        </div>
      </div>

      <ReactJkMusicPlayer className="music-player" />
    </section>
  );
}

export default AlbumPopup;
