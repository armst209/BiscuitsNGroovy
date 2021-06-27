import React from "react";

function IndividualAlbums(props) {
  return (
    <div
      // onClick={() => showAlbumInfo(release)}

      // onMouseEnter={showHoverInfo}
      // onMouseLeave={closeHoverInfo}
      className={` ${"view-album-cover"}`}
      key={`${"album-container" + props.release.id}`}
    >
      <div
        className="release-image"
        onClick={() => props.showHoverInfo(props.release)}
      >
        <img src={props.release.art_url} alt={props.release.name} />
      </div>
      <div className="release-text">
        <div>{props.release.name}</div>
        {/* <div>{release.description}</div> */}
        {/* <div>{release.price}</div> */}
      </div>
      {props.hoverInfo}
    </div>
  );
}

export default IndividualAlbums;
