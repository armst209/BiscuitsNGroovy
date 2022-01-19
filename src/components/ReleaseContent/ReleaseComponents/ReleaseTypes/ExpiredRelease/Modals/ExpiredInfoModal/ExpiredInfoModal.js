//styles
import styles from "./ExpiredInfoModal.module.scss";
const ExpiredInfoModal = ({ closeExpiredInfoModal }) => {
  return (
    <div id={styles["expired-info-modal"]}>
      <div
        className={styles["expired-info-modal-close"]}
        onClick={() => closeExpiredInfoModal()}
      >
        X
      </div>
      <div className={styles["expired-info-modal-wrapper"]}>
        <p>
          These "Released" releases are no longer available to stream on BnG
        </p>
        <p>
          Rest assured your album NFTs are here for good. They stay in your
          account permanently so you can curate the perfect collection.
        </p>
      </div>
    </div>
  );
};

export default ExpiredInfoModal;
