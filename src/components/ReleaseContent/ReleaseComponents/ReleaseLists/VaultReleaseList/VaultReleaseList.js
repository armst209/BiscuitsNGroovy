//react imports
import { useState, useEffect } from "react";

import useFetch from "../../../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";
import ScrollWidget from "../../../../../Routes/ScrollWidget/ScrollWidget";

//component imports
import ComponentLoading from "../../../../Loading/Component/ComponentLoading";
import VaultCard from "../../ReleaseCard/CardTypes/VaultCard/VaultCard";

//styles
import styles from "./VaultReleaseList.module.scss";
const VaultReleaseList = () => {
  const [releaseArr, setReleaseArr] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStateCallback = (boolean) => {
    setIsModalOpen(boolean);
  }

  //useFetch - api call
  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useFetch({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/vault`
  });

  useEffect(() => {
    if (typeof releaseData === "object" && releaseData !== null) {
      // convert object of objects to array of objects.
      let objToArr = Object.keys(releaseData).map((key) => {
        return releaseData[key];
      });
      setReleaseArr(objToArr);
    }

  }, [releaseData]);

  // Render releases in Vault container
  const mapReleases = (array) => {
    return array.map((release) => {
      return <VaultCard key={release.release_id} release={release} toggleModalState={modalStateCallback} />;
    });
  };
  return (
    <div className={styles["vault-showcase-grid"]}>
      {isLoading && <ComponentLoading />}
      {errorMessage === null
        ? releaseData && mapReleases(releaseArr)
        : errorMessage}
      {!isModalOpen && <ScrollWidget />}
    </div>
  );
};

export default VaultReleaseList;