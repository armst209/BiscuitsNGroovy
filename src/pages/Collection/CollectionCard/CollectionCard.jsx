//component imports
import AvailableRelease from "../ReleaseList/List/AvailableRelease/AvailableRelease";
import ExpiredRelease from "../ReleaseList/List/ExpiredRelease/ExpiredRelease";

const CollectionCard = ({ release }) => {
  return release.isExpired === true ? (
    <ExpiredRelease release={release} />
  ) : (
    <AvailableRelease release={release} />
  );
};

export default CollectionCard;
