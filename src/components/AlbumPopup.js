import React from "react";
import "./AlbumPopupStyles.scss";
import CheckoutButton from "../pages/Payment/Checkout";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";

function AlbumPopup(props) {
  console.log(props);
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
          {/* <div>{props.description}</div>
          <div>{props.price}</div> */}
          <div>
            <div>
              {/* <CheckoutButton
                name={props.name}
                // price={props.price}
                // description={props.description}
                // images={props.images}
              /> */}
            </div>
            <div className="music-player">
              {/* <MusicPlayer
                // songs={props.songUrl}
                albumName={props.name}
                // albumCover={props.images}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlbumPopup;
