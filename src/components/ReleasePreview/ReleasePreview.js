import React from "react";
import "./ReleasePreviewStyles.scss";

function ReleasePreview(props) {
  const handleClose = () => {
    props.toggleClose();
  };

  return (
    <section id="release-preview">
      <div className="release-preview-container">
        <div onClick={handleClose} className="close-release-info">
          X
        </div>
        <div className="release-preview-content">
          <h1>{props.name}</h1>
        </div>
      </div>
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
