//react imports
import ReactDOM from "react-dom";

//component imports
import ReleaseImage from "../../../../../../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

//styles
import "./NFTViewModalStyles.scss";

const NFTViewModalOverlay = ({ release, closeNFTView }) => {
  return (
    <section id="nft-expired-modal">
      <div className="nft-expired-modal-image-container">
        <div onClick={() => closeNFTView()} className="nft-expired-modal-close">
          X
        </div>
        <ReleaseImage
          className="nft-expired-modal-image"
          releaseImageSrc={release.art_url}
          releaseAlt={release.name}
        />
      </div>
    </section>
  );
};
const NFTExpiredModal = ({ release, closeNFTView }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <NFTViewModalOverlay release={release} closeNFTView={closeNFTView} />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
};

export default NFTExpiredModal;
