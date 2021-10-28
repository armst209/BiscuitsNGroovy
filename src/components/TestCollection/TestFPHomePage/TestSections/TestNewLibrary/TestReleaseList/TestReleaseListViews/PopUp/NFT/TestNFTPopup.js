import "./TestNFTPopupStyles.scss";

function NFTPopup(props) {
  return (
    <section id="nft-popup">
      <div className="nft-image-container">
        <div
          onClick={() => props.setShowNFTPopUp("")}
          className="nft-popup-close"
        >
          X
        </div>
        <img
          className="nft-image"
          src={props.release.art_url}
          alt={props.release.name}
        />
      </div>
    </section>
  );
}

export default NFTPopup;
