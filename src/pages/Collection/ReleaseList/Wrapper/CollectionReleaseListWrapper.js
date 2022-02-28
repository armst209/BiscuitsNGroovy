

//component imports
import NoReleasesCollection from "../../NoReleases/NoReleasesCollection";
import CollectionReleaseList from "../List/CollectionReleaseList";

const CollectionReleaseListWrapper = ({ releaseData }) => {

  return (
    <>
      {releaseData.length === 0 ? (
        <NoReleasesCollection />
      ) : (
        <CollectionReleaseList releaseData={releaseData} />
      )}
    </>
  );
};

export default CollectionReleaseListWrapper;
