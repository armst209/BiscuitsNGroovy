import { React } from "react";
import "./AlbumPopupStyles.scss";
// import CheckoutButton from "../../../../../pages/Payment/Checkout";
import MusicPlayer from "../../../../MusicPlayer/MusicPlayer";

function AlbumPopup(props) {
  const handleClose = () => {
    props.closeAlbumPopup("");
  };

  return (
    <section id="album-popup">
      <div className="album-popup-container">
        <div onClick={handleClose} className="close-album-info">
          X
        </div>
        <div className="album-popup-content">
          <img src={props.release.art_url} alt={props.release.name} />
          <h1>{props.release.name}</h1>
          <div>{props.release.description}</div>
          <div>{props.release.price}</div>
          <div>
            {/* <div>
              <CheckoutButton
                release_id={props.release.id}
                name={props.release.name}
                price={props.release.price}
                description={props.release.description}
                images={props.release.art_url}
              />
            </div> */}
            <div className="music-player">
              <MusicPlayer
                songs={props.release.songs}
                albumName={props.release.name}
                albumCover={props.release.art_url}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlbumPopup;
