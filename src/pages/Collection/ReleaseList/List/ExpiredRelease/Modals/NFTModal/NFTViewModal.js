
//component imports
import ReleaseImage from "../../../../../../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

//styles
import "./NFTViewModalStyles.scss";

//Google Analytics imports
import ReactGA from "react-ga";

const NFTExpiredModal = ({ release, toggleNFTModal}) => {

    // -------Start of Google Analytics - DON'T REMOVE-------
    ReactGA.modalview(`${release.name}-NFTModal`);
    // -------End of Google Analytics - DON'T REMOVE-------

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
