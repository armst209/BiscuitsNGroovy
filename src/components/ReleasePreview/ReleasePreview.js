import { React, useState, useEffect } from "react";
import "./ReleasePreviewStyles.scss";
import token_music_icon from "../../assets/images/love-song2.svg";
import record_icon from "../../assets/images/vinyl_yellow.svg";
import CheckoutButton from "../../pages/Payment/Checkout";
import { CSSTransition } from "react-transition-group";
import ComponentLoading from "../Loading/ComponentLoading";

function ReleasePreview(props) {
  const [populateReleaseTrackList, setPopulateReleaseTracklist] = useState();
  useEffect(() => {
    //mapping through songs array to populate playlist and numbering song order
    const songNames = props.songNames;

    let showReleaseNames = songNames.map((name, order) => {
      return name ? (
        <li key={`li-key-for-${name}-${order + 1}`}>{`${
          order + 1
        }. ${name}`}</li>
      ) : (
        <ComponentLoading
          key={`component-loading-key-for-${name}-${order + 1}`}
        />
      );
    });
    //passing in songsArray map as a parameter for hook
    setPopulateReleaseTracklist(showReleaseNames);
  }, [props.songNames]);

  const token = localStorage.getItem("token");
  const handleClose = () => {
    props.toggleClose();
  };

  return (
    <section id="release-preview" onClick={handleClose}>
      <div className="release-preview-wrapper">
        <div onClick={handleClose} className="close-release-info">
          X
        </div>
        <div className="release-preview-container">
          <CSSTransition timeout={100} classNames="release-popup">
            <div className="release-preview-content">
              <div className="release-content-left">
                <img
                  className="release-image"
                  src={props.albumCover}
                  alt="album cover"
                />
                <h1>
                  {props.name} - {props.title}
                </h1>
                <div className="release-description">{props.description}</div>
                <div className="button-container">
                  {token ? (
                    <CheckoutButton
                      key={`checkout-button-key-for-${props.title}`}
                      price={props.price}
                      albumCover={props.albumCover}
                      name={props.name}
                      id={props.id}
                      stripeLoader={props.stripeLoader}
                      setStripeLoader={props.setStripeLoader}
                    />
                  ) : (
                    <button
                      className="no-token-btn"
                      onClick={() => props.showSignUpPopup(!props.signUpPopup)}
                    >
                      BUY NOW
                      <img src={token_music_icon} alt="heart music icon" />
                    </button>
                  )}
                </div>
              </div>
              <div className="release-content-right">
                <div className="record-image">
                  <img src={record_icon} alt="record" className="record-svg" />
                </div>

                <div className="release-information">
                  <div className="release-tracklist">
                    <ul>{populateReleaseTrackList}</ul>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="release-exit-text">Click anywhere to exit</div>
      </div>
    </section>
  );
}

export default ReleasePreview;
