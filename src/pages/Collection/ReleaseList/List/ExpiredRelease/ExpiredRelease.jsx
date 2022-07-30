//styles
import styles from "../../../../../common/components/ReleaseContent/ReleaseComponents/ReleaseTypes/ReleaseHover.module.scss";

//react imports
import useModal from "../../../../../common/hooks/Modal/useModal";

//component imports
import ReleaseImage from "../../../../../common/components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";
import ExpiredReleaseHover from "./Hover/ExpiredReleaseHover";
import BiscuitInsert from "../../../../../common/components/ReleaseContent/Biscuit/BiscuitInsert/BiscuitInsert";

const ExpiredRelease = ({ release }) => {
  const {
    isModalShowing: isInsertModalShowing,
    toggleModal: toggleInsertModal,
    Modal,
  } = useModal("modal-overlay-root");

  return (
    <figure id="expired-release" className={styles["hover-img"]}>
      <ReleaseImage releaseImageSrc={release.art_url} releaseAlt={release.name} />
      {/* Hover state */}
      <figcaption>
        <ExpiredReleaseHover release={release} toggleInsertModal={toggleInsertModal} />
      </figcaption>
      {/* Insert Modal */}
      <Modal isModalShowing={isInsertModalShowing}>
        <BiscuitInsert release={release} toggleInsertModal={toggleInsertModal} />
      </Modal>
    </figure>
  );
};
export default ExpiredRelease;
