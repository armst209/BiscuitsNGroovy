//react imports
import { useState, useEffect } from "react";
import useTestAxiosFetch from "../../../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";

//component imports
import ComponentLoading from "../../../../Loading/Component/ComponentLoading";
import VaultCard from "../../ReleaseCard/CardTypes/VaultCard/VaultCard";

//styles
import styles from "./VaultReleaseList.module.scss";
const VaultReleaseList = () => {
  const [releaseArr, setReleaseArr] = useState([]);

  //useFetch - api call
  const { responseData:releaseData, isLoading, errorMessage} = useTestAxiosFetch({url:`${process.env.REACT_APP_BACKEND_URL}/vault`})

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
