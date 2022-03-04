//styles
import styles from "../../../../../components/ReleaseContent/ReleaseComponents/ReleaseTypes/ReleaseHover.module.scss";

//react imports
import useModal from "../../../../../customHooks/Modal/useModal";

//component imports
import AvailableReleaseHover from "./Hover/AvailableReleaseHover";
import AvailableReleaseModal from "./Modal/AvailableReleaseModal";
import ReleaseImage from "../../../../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

const AvailableRelease = ({ release }) => {

    const {
      isModalShowing,
      toggleModal,
      Modal
    } = useModal("modal-overlay-root");

  return (
    <figure className={styles["hover-img"]}>
      <ReleaseImage
        releaseImageSrc={release.art_url}
        releaseAlt={release.name}
      />

      <figcaption
        onClick={() => toggleModal()}
      >
        {/* Hover state*/}
        <AvailableReleaseHover release={release} />
      </figcaption>
  
      <Modal isModalShowing={isModalShowing}>
        <AvailableReleaseModal
          release={release}
          toggleModal={toggleModal}
        />
      </Modal>
    </figure>
  );
};

export default AvailableRelease;
