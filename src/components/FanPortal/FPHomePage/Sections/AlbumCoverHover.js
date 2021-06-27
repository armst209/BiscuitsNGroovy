import React from "react";
import "./AlbumCoverHoverStyle.scss";

function AlbumCoverHover(props) {
  return (
    <div id="album-hover">
      <div onClick={() => props.closeHoverInfo(props.release)}>X</div>
      <div className="album-hover-wrapper">
        <div>{props.release.name}</div>
        <button>view release</button>
      </div>
    </div>
  );
}

export default AlbumCoverHover;
