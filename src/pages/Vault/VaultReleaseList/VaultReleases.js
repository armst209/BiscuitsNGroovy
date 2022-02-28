//react imports
import useTestAxiosFetch from "../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";

//component imports
import VaultLoader from "../Loader/VaultLoader";
import VaultReleaseList from "./List/VaultReleaseList";

//styles
import styles from "./VaultReleases.module.scss";

//utility imports
import { releaseObjectToArray } from "../../../utils/UtilityFunctions.js"


const VaultReleases = () => {

    const {
        responseData,
        isLoading,
        errorMessage,
        errorMessageComponent
    } = useTestAxiosFetch({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/vault`
    });

    //converting object of objects into array of objects
    let releaseData = releaseObjectToArray(responseData)

    return (
        <div className={styles["vault-showcase-grid"]}>
            {isLoading && <VaultLoader />}
            {errorMessage === null
                ? releaseData && <VaultReleaseList releaseData={releaseData} />
                : <div>{errorMessageComponent}</div>}
        </div>
    )
}

export default VaultReleases