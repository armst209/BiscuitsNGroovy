// react imports
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import useFetch from "../../customHooks/Fetch/useFetch";

//styles
import styles from "./Vault.module.scss";

//svg imports
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";

//Component imports
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import VaultCard from "../../components/ReleaseContent/ReleaseComponents/ReleaseCard/CardTypes/VaultCard/VaultCard";

const Vault = () => {
  const [releaseArr, setReleaseArr] = useState([]);

  //useFetch - api call
  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/vault`);

  useEffect(() => {
    if (typeof releaseData === "object" && releaseData !== null) {
      // convert object of objects to array of objects.
      let objToArr = Object.keys(releaseData).map((key) => {
        return releaseData[key];
      });
      setReleaseArr(objToArr);
    }
    // console.log(releaseData);
  }, [releaseData]);

  // Check when modal is open, if open prevent background scroll.
  //!! need to fix -- dont directly manipulate dom
  // useEffect(() => {
  //   if (isReleaseModalOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [isReleaseModalOpen]);

  // useEffect(() => {
  //   console.log(selectedRelease);
  // }, [selectedRelease]);

  // Render releases in Vault container
  const mapReleases = (array) => {
    return array.map((release) => {
      return <VaultCard key={release.release_id} release={release} />;
    });
  };

  return (
    <section id="vault" className={`_main_section ${styles["vault"]}`}>
      <div className={styles["vault-title"]}>
        <h1>
          <RecordVinyl data-testid="record-svg" width="50px" />
          <div>VAULT</div>
        </h1>
      </div>
      <div className={styles["vault-contents-wrapper"]}>
        <div className={styles["vault-header"]}>
          <p className={styles["vault-header-p-1"]}>
            The vault is a repository of all <span>past</span> releases on BnG.
            Take a look at the <span>artist</span> we have worked with thus far.
          </p>
          <p className={styles["vault-header-p-2"]}>
            To see releases currently available, visit the{" "}
            <HashLink
              className={styles["showcase-link"]}
              smooth
              to="/#music-showcase-return"
            >
              music showcase
            </HashLink>
            .
          </p>
        </div>
        <div className={styles["vault-showcase"]}>
          <div className={styles["vault-showcase-grid"]}>
            {isLoading && <ComponentLoading />}
            {errorMessage === null
              ? releaseData && mapReleases(releaseArr)
              : errorMessage}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vault;
