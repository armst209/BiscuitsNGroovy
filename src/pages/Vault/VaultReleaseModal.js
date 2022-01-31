import React from "react";
import ReleaseImage from "../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";
import ReleaseTracklist from "../../components/ReleaseContent/ReleaseComponents/ReleaseTracklist/ReleaseTracklist";
import styles from "./VaultReleaseModal.module.scss";

const VaultReleaseModal = ({ release, isModalOpen, handleModalClose }) => {
  const { release_name, release_art, release_description, start_date, end_date, playlist, artist_name } = release;

  const dateConverter = (dateString) => {
    let convertedDate = new Date(dateString);
    console.log(convertedDate);

    return `${convertedDate.getUTCMonth() + 1}/${convertedDate.getUTCDate()}/${convertedDate.getUTCFullYear()}`;
  };

  return (
    <div className={isModalOpen ? 
      styles["vault-modal-wrapper"] : 
      styles["vault-modal-wrapper-hidden"]}>
      <div className={styles["vault-modal-container"]}>
        <div className={styles["modal-header"]}>
          <span onClick={handleModalClose}>X</span>
        </div>
        <div className={styles["modal-body"]}>
          <div className={styles["modal-body-left-side"]}>
            <ReleaseImage releaseImageSrc={release_art} alt={`${release_name} biscuit`} />
            <h1>{artist_name}</h1>
            <div className={styles["date-wrapper"]}>
              <span>{dateConverter(start_date)} -</span> <span>{dateConverter(end_date)}</span>
            </div>
            <a
              href="https://open.spotify.com/user/ajxyu54lfjlxoc8a7dzx59odj?si=crL_VRaXSUiBRDEW8-31xg&nd=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"></i>
            </a>
          </div>
          <div className={styles["modal-body-right-side"]}>
            <h1>{release_name}</h1>
            <p>{release_description}</p>
            <ReleaseTracklist songs={playlist} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultReleaseModal;
