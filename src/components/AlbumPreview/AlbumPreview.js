import React from "react";
import "./AlbumPreviewStyles.scss";

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
        <Checkout />
      </div>
    </div>
  ) : (
    ""
  );
}

export default AlbumPreview;
