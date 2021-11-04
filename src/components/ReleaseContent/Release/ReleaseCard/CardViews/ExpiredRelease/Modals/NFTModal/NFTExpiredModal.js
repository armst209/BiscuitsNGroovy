import ReleaseImage from "../../../../ReleaseImage/ReleaseImage";
import "./NFTExpiredModalStyles.scss";

function NFTExpiredModal({
  release,
  showNFTExpiredModal,
  setShowNFTExpiredModal,
}) {
  return (
    <section id="nft-expired-modal">
      <div className="nft-expired-modal-image-container">
        <div
          onClick={() => setShowNFTExpiredModal(!showNFTExpiredModal)}
          className="nft-expired-modal-close"
        >
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
