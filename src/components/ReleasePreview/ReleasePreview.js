import { React, useState } from "react";
import "./ReleasePreviewStyles.scss";
import token_music_icon from "../../assets/images/love-song2.svg";
import CheckoutButton from "../../pages/Payment/Checkout";
import { CSSTransition } from "react-transition-group";

function ReleasePreview(props) {
  const [releaseTrackList, setReleaseTracklist] = useState(
    <ul>
      <li>Track #</li>
      <li>Track #</li>
      <li>Track #</li>
      <li>Track #</li>
      <li>Track #</li>
      <li>Track #</li>
      <li>Track #</li>
      <li>Track #</li>
      <li>Track #</li>
      <li>Track #</li>
    </ul>
  );
  console.log(props);
  const token = localStorage.getItem("token");
  const handleClose = () => {
    props.toggleClose();
  };

  return (
    <section id="release-preview" onClick={handleClose}>
      <div className="release-preview-wrapper">
        <div className="release-preview-container">
          <div onClick={handleClose} className="close-release-info">
            X
          </div>
          <CSSTransition timeout={100} classNames="release-popup">
            <div className="release-preview-content">
              <div className="release-content-left">
                <img
                  className="release-image"
                  src={props.albumCover}
                  alt="album cover"
                />
                <h1>
                  {props.name} - {"releaseTitle"}
                </h1>
                <div>{props.description}</div>
              </div>
              <div className="release-content-right">
                <div className="release-information">
                  <div className="release-tracklist">{releaseTrackList}</div>
                </div>
                <div>
                  {token ? (
                    <CheckoutButton
                      release_id={props.id}
                      name={props.name}
                      price={props.price}
                      description={props.description}
                      images={props.albumCover}
                      stripeLoaderFromCO={props.stripeLoaderFromRP}
                    />
                  ) : (
                    <button
                      className="no-token-btn"
                      onClick={() => props.no_token_pop(true)}
                    >
                      BUY NOW
                      <img src={token_music_icon} alt="heart music icon" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
}

export default ReleasePreview;
