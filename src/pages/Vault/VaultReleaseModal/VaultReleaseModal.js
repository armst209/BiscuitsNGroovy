// React Imports
import { useState} from "react";
import Modal from "react-modal"

// Component Imports
import ReleaseImage from "../../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";
import ReleaseTracklist from "../../../components/ReleaseContent/ReleaseComponents/ReleaseTracklist/ReleaseTracklist";
import VaultReleaseDescriptionModal from "../VaultReleaseDescriptionModal/VaultReleaseDescriptionModal";

// Style Imports
import styles from "./VaultReleaseModal.module.scss";

//SVG Imports
// import { ReactComponent as MainHeaderLogo } from "../../assets/images/bng-main-logo.svg";

//utility imports
import { dateConverter } from "../../../utils/UtilityFunctions";

const VaultReleaseModal = ({ release, hideVaultModalHandler, isOpen }) => {
    const [showHideVaultReleaseDescription, setShowHideReleaseDescription] =
      useState(false);

    //vault description handler
    const showHideVaultReleaseDescriptionHandler = () =>
      setShowHideReleaseDescription(previousShowHideVaultReleaseDescription=> !previousShowHideVaultReleaseDescription);

    //release object destructuring
    const {
      release_name,
      release_art,
      release_description,
      start_date,
      end_date,
      playlist,
      artist_name,
      social
    } = release;

    const socialLinks = (social) => {
      if(/spotify/.test(social)){
        return(
          <a
          href={social}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["spotify"]}
        >
          <i className="fab fa-spotify"></i>
        </a>
        )

      } else if (/tiktok/.test(social)){
        return (        
        <a
          href={social}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['tiktok']}
        >
          <i className="fab fa-tiktok"></i>
        </a>)

      }
    }

    return (
      <Modal isOpen={isOpen} className={styles["vault-modal-wrapper"]} overlayClassName={styles['vault-modal-overlay']}>
          <div className={styles["vault-modal-container"]}>
            <div className={styles["modal-header"]}>
              <button
                aria-label="Close"
                className={styles["vault-modal-close"]}
                data-testid="modal-close-button"
                onClick={() => {
                  hideVaultModalHandler();
                }}
              >
                X
              </button>
            </div>
            <div className={styles["modal-body"]}>
              <div className={styles["modal-body-left-side"]}>
                {/* Biscuits and groovy logo is redundant - not a unique link & already on bng site, users know */}
                {/* <MainHeaderLogo className={styles["logo"]} /> */}
                <div className={styles["modal-body-left-release-image-container"]}>
                <ReleaseImage
                  releaseImageSrc={release_art}
                  alt={`${release_name} biscuit`}
                />
                </div>
                <h1>{artist_name}</h1>
                <p 
                  className={styles["modal-release-name"]}
                  data-testid="vault-release-name"
                >{release_name}</p>
                <div className={styles["date-wrapper"]}>
                  <span className={styles["date"]}>
                    {dateConverter(start_date)} - {dateConverter(end_date)}
                  </span>
                </div>
                {social && socialLinks(social)}
              </div>
              <div className={styles["modal-body-right-side"]}>
                <p className={styles["modal-body-release-description"]}>
                  {release_description}
                </p>
                <button
                  onClick={() => showHideVaultReleaseDescriptionHandler()}
                  className="_button"
                >
                  Learn More
                </button>
                {showHideVaultReleaseDescription && (
                  <VaultReleaseDescriptionModal
                    showHideVaultReleaseDescriptionHandler={
                      showHideVaultReleaseDescriptionHandler
                    }
                    releaseDescription={release_description}
                  />
                )}
                <ReleaseTracklist songs={playlist} />
              </div>
            </div>
          </div>

      </Modal>)
  }
;

export default VaultReleaseModal;
