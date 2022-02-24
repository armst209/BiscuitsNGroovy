//styles
// import styles from "../../../../../../pages/Vault/Vault.module.scss";
import hoverStyles from "../../CardTypes/VaultCard/Hover/VaultCardHover.module.scss";

//component imports
import ReleaseImage from "../../../ReleaseImage/ReleaseImage";
import VaultReleaseModal from "../../../../../../pages/Vault/VaultReleaseModal/VaultReleaseModal";

//react imports
import { useState, createRef } from "react";
import ReactDOM from "react-dom";

//npm imports
// ! Disable body-scroll-lock due to ios issue. Research alternative  - ref can be removed.
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const VaultCard = ({ release, toggleModalState }) => {
  const [showVaultModal, setShowVaultModal] = useState(false);

  //release object destructuring
  const { artist_name, release_art } = release;
  
  //modal handlers
  const showVaultModalHandler = () => {
    setShowVaultModal(true);
    // ! Disable body-scroll-lock due to ios issue. Research alternative - refs can be removed.
    // disableBodyScroll(ref);
    document.body.style.overflow='hidden'
    toggleModalState(true);
  };

  const hideVaultModalHandler = () => {
    setShowVaultModal(false);
    // ! Disable body-scroll-lock due to ios issue. Research alternative - refs can be removed.
    // enableBodyScroll(ref);
    document.body.style.overflow = "scroll"
    toggleModalState(false);
  };

  //ref for vault modal
  const ref = createRef();

  return (
    <>
      <figure
        className={hoverStyles["hover-img"]}
        onClick={() => {
          showVaultModalHandler();
        }}
        data-testid="vault-release"
      >
        <ReleaseImage
          releaseImageSrc={release_art}
          releaseAlt={`vault-${artist_name}`}
        />
      {/* Hover state*/}
        <figcaption>  
          <div>
            <h2>{artist_name}</h2>
          </div>
        </figcaption>
        {/* Modal */}
      </figure>
      {showVaultModal && ReactDOM.createPortal(
        <VaultReleaseModal
          ref={ref}
          release={release}
          hideVaultModalHandler={hideVaultModalHandler}
        />, document.getElementById("modal-overlay-root")
      )}
    </>
  );
};

export default VaultCard;
