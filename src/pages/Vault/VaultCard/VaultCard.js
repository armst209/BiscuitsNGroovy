//styles
import hoverStyles from "../VaultCard/Hover/VaultCardHover.module.scss"

//component imports
import ReleaseImage from "../../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";
import VaultReleaseModal from "../VaultReleaseModal/VaultReleaseModal";

//react imports
import useModal from "../../../customHooks/Modal/useModal";

const VaultCard = ({ release }) => {
  const { isModalShowing, Modal, toggleModal } = useModal("modal-overlay-root")

  //release object destructuring
  const { artist_name, release_art } = release;

  // Keyboard accessibility for each Vault card.
  const handleKeydown = (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
      toggleModal()
    };
  }

  return (
    <>
      <figure
        tabIndex={0}
        className={hoverStyles["hover-img"]}
        onClick={() => toggleModal()}
        onKeyDown={(event) => { handleKeydown(event) }}
        data-testid="vault-release"
      >
        <ReleaseImage
          releaseImageSrc={release_art}
          releaseAlt={`vault-${artist_name}`}
        />
        {/* Hover state*/}
        <figcaption>
          <div>
            <h2>{artist_name}</h2>
          </div>
        </figcaption>
        {/* Modal */}
      </figure>
      <Modal isModalShowing={isModalShowing}>
        <VaultReleaseModal release={release} toggleModal={toggleModal} />
      </Modal>
    </>
  );
};

export default VaultCard;
