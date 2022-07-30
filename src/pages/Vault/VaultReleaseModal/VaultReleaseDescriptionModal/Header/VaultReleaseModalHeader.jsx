//styles
import styles from "./VaultReleaseModalHeader.module.scss";

//component imports
import Button from "../../../../../common/UI/Button/Button";

const VaultReleaseModalHeader = ({ toggleModal }) => {
  return (
    <div className={styles["modal-header"]}>
      <Button
        ariaLabel="Close"
        className={styles["vault-modal-close"]}
        dataTestId="modal-close-button"
        onClick={() => toggleModal()}
      >
        X
      </Button>
    </div>
  );
};

export default VaultReleaseModalHeader;
