//styles
import styles from "../../../../../../pages/Vault/Vault.module.scss";
import hoverStyles from "../../CardTypes/VaultCard/Hover/VaultCardHover.module.scss";

//component imports
import ReleaseImage from "../../../ReleaseImage/ReleaseImage";
import VaultReleaseModal from "../../../../../../pages/Vault/VaultReleaseModal/VaultReleaseModal";

//react imports
import { useState, createRef } from "react";

//npm imports
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const VaultCard = ({ release, toggleModalState }) => {
  const [showVaultModal, setShowVaultModal] = useState(false);

  //release object destructuring
  const { artist_name, release_art } = release;

  //modal handlers
  const showVaultModalHandler = () => {
    setShowVaultModal(true);
    disableBodyScroll(ref);
    toggleModalState(true);
  };

  const hideVaultModalHandler = () => {
    setShowVaultModal(false);
    enableBodyScroll(ref);
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
      >
        <ReleaseImage
          releaseImageSrc={release_art}
          releaseAlt={`vault-${artist_name}`}
        />
 {/* Hover state*/}
        <figcaption>  
          <div className={styles["release-overlay-container"]}>
            <h2>{artist_name}</h2>
          </div>
        </figcaption>
        {/* Modal */}
      </figure>
      {showVaultModal && (
        <VaultReleaseModal
          ref={ref}
          release={release}
          hideVaultModalHandler={hideVaultModalHandler}
        />
      )}
    </>
  );
};

export default VaultCard;
