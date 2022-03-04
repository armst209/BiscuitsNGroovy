//styles
import styles from "./ExpiredReleaseHover.module.scss";

//useModal
import useModal from "../../../../../../customHooks/Modal/useModal";

//component imports
import Button from "../../../../../../UI/Button/Button";
import ExpiredMobileIcons from "./ExpiredMobileIcons/ExpiredMobileIcons";
import NFTViewModal from "../Modals/NFTModal/NFTViewModal"

/**
 *TODO: find proper mobile icons
 */
const ExpiredReleaseHover = ({ toggleInsertModal, release }) => {

  const { isModalShowing:isNFTModalShowing, toggleModal:toggleNFTModal, Modal } = useModal("modal-overlay-root");

  return (
    <section id={styles["expired-hover"]}>
      <div className={styles["nft-hover-wrapper"]}>
        <Button onClick={() => toggleNFTModal()}>
          <div className={styles["nft-hover-name"]}>View NFT</div>
        </Button>
        {/* if both insert links are empty the "View Insert" button won't display */}
        {!release.insert_link_1 && !release.insert_link_2 ? (
          ""
        ) : (
          <Button onClick={() => toggleInsertModal()}>
            <div className={styles["nft-hover-name"]}>View Insert</div>
          </Button>
        )}
      </div>
      {/* MOBILE VIEW: display:none above 768px */}
      <ExpiredMobileIcons release={release} toggleInsertModal={toggleInsertModal} toggleNFTModal={toggleNFTModal}/>
      <Modal isModalShowing={isNFTModalShowing}>
        <NFTViewModal
          release={release}
          toggleNFTModal={toggleNFTModal}
        />
      </Modal>
    </section>
  );
};

export default ExpiredReleaseHover;
