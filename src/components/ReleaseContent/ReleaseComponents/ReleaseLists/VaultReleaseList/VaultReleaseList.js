//react imports
import { useState, useEffect, useMemo } from "react";
import useFetch from "../../../../../customHooks/Fetch/useFetch";

//component imports
import ComponentLoading from "../../../../Loading/Component/ComponentLoading";
import VaultCard from "../../ReleaseCard/CardTypes/VaultCard/VaultCard";

//styles
import styles from "./VaultReleaseList.module.scss";
const VaultReleaseList = () => {
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
  //!! need to fix -- find a solution that doesnt direction manipulate the dom
  //TODO: if no other option create a custom hook to be reused for each modal
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
    <div className={styles["vault-showcase-grid"]}>
      {isLoading && <ComponentLoading />}
      {errorMessage === null
        ? releaseData && mapReleases(releaseArr)
        : errorMessage}
    </div>
  );
};

export default VaultReleaseList;
