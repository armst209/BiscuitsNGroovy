import { React, useState } from "react";
import "./ReleasePreviewStyles.scss";
import token_music_icon from "../../assets/images/love-song2.svg";
import CheckoutButton from "../../pages/Payment/Checkout";
import { CSSTransition } from "react-transition-group";

function ReleasePreview(props) {
  const [loadingStripe, setLoadingStripe] = useState("");

  const token = localStorage.getItem("token");
  const handleClose = () => {
    props.toggleClose();
  };

  return (
    <section id="release-preview" onClick={handleClose}>
      <div className="release-preview-container">
        <div onClick={handleClose} className="close-release-info">
          X
        </div>
        <CSSTransition timeout={100} classNames="release-popup">
          <div className="release-preview-content">
            <img src={props.albumCover} alt="album cover" />
            <h1>{props.name}</h1>
            <div>{props.description}</div>
            <div>
              {token ? (
                <CheckoutButton
                  release_id={props.id}
                  name={props.name}
                  price={props.price}
                  description={props.description}
                  images={props.albumCover}
                  stripeLoaderMethod={setLoadingStripe}
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
        </CSSTransition>
      </div>
      {loadingStripe}
    </section>
  );
  //Props are passing down the showAlbumDetails function/hook to FPHomepage & AlbumPreview as setTrigger
  //Props are passing down the boolean albumDetails to AlbumPreview
  // return props.trigger ? (
  //   <div id="album-preview-container">
  //     {/* {props.children} */}

  //     <div className="album-content">
  //       <div className="close-btn" onClick={() => props.setTrigger(false)}>
  //         <div>X</div>
  //       </div>
  //       <Checkout />
  //     </div>
  //   </div>
  // ) : (
  //   ""
  // );
}

export default ReleasePreview;
