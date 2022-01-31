// react imports
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import useFetch from "../../customHooks/Fetch/useFetch";
import ReleaseImage from "../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

//styles
import styles from "./Vault.module.scss";

//Component imports
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import VaultReleaseModal from "./VaultReleaseModal";

const Vault = () => {
  const [releaseArr, setReleaseArr] = useState([]);
  const [isReleaseModalOpen, setIsReleaseModalOpen] = useState(false);
  const [selectedRelease, setSelectedRelease] = useState(null);

  const { responseData: releaseData, isLoading, errorMessage } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/vault`);

  useEffect(() => {
    if (typeof releaseData === "object" && releaseData !== null) {
      // convert object of objects to array of objects.
      let objToArr = Object.keys(releaseData).map((key) => {
        return releaseData[key];
      });
      setReleaseArr(objToArr);
    }
    console.log(releaseData)
  }, [releaseData]);
  
  // Check when modal is open, if open prevent background scroll.
  useEffect(() => {
    if (isReleaseModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isReleaseModalOpen]);
  
  // useEffect(() => {
  //   console.log(selectedRelease);
  // }, [selectedRelease]);
  
  // Release onclick method - when user clicks on a biscuit/release, modal opens with additional information.
  const handleReleaseClick = (release) => {
    setSelectedRelease(release);
    setIsReleaseModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedRelease(null);
    setIsReleaseModalOpen(false);
  };

  // Render releases in Vault container
  const mapReleases = (array) => {
    return array.map((release) => {
      const { artist_name, release_art, release_id } = release;
      return (
        <div key={release_id} className={styles["release-wrapper"]} onClick={() => handleReleaseClick(release)}>
          <ReleaseImage releaseImageSrc={release_art} releaseAlt="random alt" />
          <div className={styles["release-overlay-container"]}>
            <h2>{artist_name}</h2>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <FixedNavigationSpacer />
      <section id="vault" className={styles["vault"]}>
        <div className={styles["vault-title"]}>
          <h1>
            <RecordVinyl width="50px" />
            <div>VAULT</div>
          </h1>
        </div>
        <div className={styles["vault-contents-wrapper"]}>
          <div className={styles["vault-header"]}>
            <h1>
              The vault is a repository of all <span>past</span> releases on BnG. <br /> Take a look at the <span>artist</span> we have worked with
              thus far.
              <br />
              <br />
              To see releases currently available, visit the{" "}
              <HashLink className={styles["showcase-link"]} smooth to="/#music-showcase-return">
                music showcase
              </HashLink>
              .
            </h1>
          </div>
          <div className={styles["vault-showcase"]}>
            {isLoading && <ComponentLoading />}
            {errorMessage === null ? releaseData && mapReleases(releaseArr) : errorMessage}
          </div>
        </div>
      </section>
      {selectedRelease ? <VaultReleaseModal isModalOpen={isReleaseModalOpen} release={selectedRelease} handleModalClose={handleModalClose} /> : <></>}
    </>
  );
};

export default Vault;
