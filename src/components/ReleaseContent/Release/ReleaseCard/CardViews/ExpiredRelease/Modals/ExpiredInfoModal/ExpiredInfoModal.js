//styles
import styles from "./ExpiredInfoModal.module.scss";
const ExpiredInfoModal = ({ closeExpiredInfoModal }) => {
  return (
    <div id={styles["expired-info-modal"]}>
      <div onClick={() => closeExpiredInfoModal()}>X</div>
      CHANGE WORDING
      <p>This release is no longer available to stream on BnG</p>
      <p>
        Rest assured your album NFTs are here for good. They stay in your
        account permanently so you can curate the perfect collection.
      </p>
      <p>
        Like what you heard? Check out our previous artists music here in the
        vault- LINK TO VAULT
      </p>
    </div>
  );
};

export default ExpiredInfoModal;
