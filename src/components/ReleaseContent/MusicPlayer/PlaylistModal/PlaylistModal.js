//react imports
import ReactDOM from "react";

const PlaylistModalOverlay = () => {
  return <div>Mobile tracklist here</div>;
};

const PlaylistModal = () => {
  return (
    <div>
      {ReactDOM.createPortal(
        <PlaylistModalOverlay
          release={release}
          setShowReleasePreview={setShowReleasePreview}
          showReleasePreview={showReleasePreview}
        />,
        document.getElementById("modal-overlay-root")
      )}
    </div>
  );
};

export default PlaylistModal;
