//styles
import styles from "../../../../../../pages/Vault/Vault.module.scss";
import hoverStyles from "../../CardTypes/VaultCard/Hover/VaultCardHover.module.scss";

//component imports
import ReleaseImage from "../../../ReleaseImage/ReleaseImage";
import VaultReleaseModal from "../../../../../../pages/Vault/VaultReleaseModal";

//react imports
import { useState } from "react";

const VaultCard = ({
  release,

  isReleaseModalOpen,
}) => {
  const { artist_name, release_art } = release;

  const [showVaultModal, setShowVaultModal] = useState(false);

  const showVaultModalHandler = () => setShowVaultModal(true);

  const hideVaultModalHandler = () => setShowVaultModal(false);

  return (
    <>
      <figure
        className={hoverStyles["hover-img"]}
        onClick={() => showVaultModalHandler()}
      >
        <ReleaseImage
          releaseImageSrc={release_art}
          releaseAlt={`vault-${artist_name}`}
        />

        <figcaption>
          {/* Hover state*/}
          <div className={styles["release-overlay-container"]}>
            <h2>{artist_name}</h2>
          </div>
        </figcaption>
        {/* Modal */}
      </figure>
      {showVaultModal && (
        <VaultReleaseModal
          release={release}
          hideVaultModalHandler={hideVaultModalHandler}
        />
      )}
    </>
  );
};

export default VaultCard;
