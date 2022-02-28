//react imports
import useTestAxiosFetch from "../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";

//utility imports
import { token } from "../../../utils/UtilityVariables";

//component imports
import CollectionLoader from "../Loader/CollectionLoader";
import CollectionReleaseListWrapper from "../ReleaseList/Wrapper/CollectionReleaseListWrapper";

const CollectionReleases = () => {

    const {
        responseData: releaseData,
        isLoading,
        errorMessage,
        errorMessageComponent
    } = useTestAxiosFetch({
        url: `${process.env.REACT_APP_BACKEND_URL}/library`,
        method: "GET",
        headers: { "x-access-token": token },
    });



    return (
        <>
            {isLoading && <CollectionLoader />}
            {errorMessage === null ? (
                releaseData && (
                    <CollectionReleaseListWrapper releaseData={releaseData.library} />
                )
            ) : (
                <div>{errorMessageComponent}</div>
            )}
        </>
    );
};

export default CollectionReleases;
