import React from "react";
import "./AlbumPreviewStyles.scss";
import kanye_album from "../../assets/images/808s_&_Heartbreak.png";
import Checkout from "../../pages/Payment/Checkout";

function AlbumPreview(props) {
  console.log(props);
  //Props are passing down the showAlbumDetails function/hook to FPHomepage & AlbumPreview as setTrigger
  //Props are passing down the boolean albumDetails to AlbumPreview
  return props.trigger ? (
    <div id="album-preview-container">
      {/* {props.children} */}

      <div className="album-content">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          <div>X</div>
        </div>
        <div className="album-image">
          <img src={kanye_album} alt="album" />
        </div>
        <div className="album-text">
          808s & Heartbreak is the fourth studio album by American producer and
          vocalist Kanye West. It was released on November 24, 2008, by Def Jam
          Recordings and Roc-A-Fella Records.
        </div>
        <div>
          <Checkout />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AlbumPreview;
