import React from "react";
import "./AlbumPreviewStyles.scss";
import kanye_album from "../../assets/images/808s_&_Heartbreak.png";

function AlbumPreview() {
  return (
    <div id="album-preview-container">
      <div className="x-close">
        <div>X</div>
      </div>
      <div className="album-content">
        <div className="album-image">
          <img src={kanye_album} alt="album" />
        </div>
        <div className="album-text">
          08s & Heartbreak is the fourth studio album by American producer and
          vocalist Kanye West. It was released on November 24, 2008, by Def Jam
          Recordings and Roc-A-Fella Records.
        </div>
      </div>
    </div>
  );
}

export default AlbumPreview;
