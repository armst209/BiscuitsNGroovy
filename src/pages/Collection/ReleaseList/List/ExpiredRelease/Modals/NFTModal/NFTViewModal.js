
//component imports
import ReleaseImage from "../../../../../../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

//styles
import "./NFTViewModalStyles.scss";

const NFTExpiredModal = ({ release, toggleNFTModal}) => {

  return ( 
    <section id="nft-expired-modal">
      <div className="nft-expired-modal-image-container">
        <div onClick={() => toggleNFTModal()} className="nft-expired-modal-close">
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


export default NFTExpiredModal;
