import AvailableRelease from "../../../ReleaseTypes/AvailableRelease/AvailableRelease";
import ExpiredRelease from "../../../ReleaseTypes/ExpiredRelease/ExpiredRelease";

const CollectionCard = ({ release }) => {
  return release.isExpired === true ? (
    <ExpiredRelease release={release} />
  ) : (
    <AvailableRelease release={release} />
  );
};

export default CollectionCard;
