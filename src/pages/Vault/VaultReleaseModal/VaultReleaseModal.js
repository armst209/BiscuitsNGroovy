// React Imports
import { useState } from "react";

// Component Imports
import VaultReleaseDescriptionModal from "./VaultReleaseDescriptionModal/VaultReleaseDescriptionModal";
import VaultReleaseModalHeader from "./VaultReleaseDescriptionModal/Header/VaultReleaseModalHeader";
import VaultReleaseModalLeftSide from "./VaultReleaseDescriptionModal/Body/VaultReleaseModalLeftSide";
import VaultReleaseModalRightSide from "./VaultReleaseDescriptionModal/Body/VaultReleaseModalRightSide";

// Style Imports
import styles from "./VaultReleaseModal.module.scss";

const VaultReleaseModal = ({ release, toggleModal }) => {
  const [showHideVaultReleaseDescription, setShowHideReleaseDescription] =
    useState(false);

  //vault description handler
  const showHideVaultReleaseDescriptionHandler = () => setShowHideReleaseDescription(prevState => !prevState);

  return (
    <section className={styles["vault-modal-wrapper"]} >
      <div className={styles["vault-modal-container"]}>
        <VaultReleaseModalHeader toggleModal={toggleModal} />
        <div className={styles["modal-body"]}>
          <VaultReleaseModalLeftSide release={release} />
          <VaultReleaseModalRightSide release={release} showHideVaultReleaseDescriptionHandler={showHideVaultReleaseDescriptionHandler} />
        </div>
      </div>
      {showHideVaultReleaseDescription && (
        <VaultReleaseDescriptionModal
          showHideVaultReleaseDescriptionHandler={
            showHideVaultReleaseDescriptionHandler
          }
          releaseDescription={release.release_description}
        />
      )}
    </section>)
}
  ;

export default VaultReleaseModal;

