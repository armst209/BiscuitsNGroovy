import ReleaseImage from "../../../../ReleaseImage/ReleaseImage";
import "./NFTViewModalStyles.scss";

function NFTExpiredModal({ release, closeNFTView }) {
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
}

export default NFTExpiredModal;
