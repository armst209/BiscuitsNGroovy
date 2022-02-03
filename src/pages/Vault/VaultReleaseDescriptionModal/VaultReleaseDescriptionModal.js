//styles
import styles from "./VaultReleaseDescriptionModal.module.scss";

const VaultReleaseDescriptionModal = ({
  releaseDescription,
  showHideVaultReleaseDescriptionHandler,
}) => {
  return (
    <div className={styles["vault-release-description-modal"]}>
      <div
        className={styles["vault-release-description-modal-close"]}
        onClick={() => showHideVaultReleaseDescriptionHandler()}
      >
        X
      </div>
      <p>{releaseDescription}</p>
    </div>
  );
};

export default VaultReleaseDescriptionModal;
