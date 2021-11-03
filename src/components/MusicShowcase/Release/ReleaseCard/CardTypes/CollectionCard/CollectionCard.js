import AvailableRelease from "../../CardViews/AvailableRelease/AvailableRelease";
import ExpiredRelease from "../../CardViews/ExpiredRelease/ExpiredRelease";

const CollectionCard = ({ release }) => {
  // if release is expired
  return release.isExpired === true ? (
    <ExpiredRelease release={release} />
  ) : (
    <AvailableRelease release={release} />
  );
};

export default CollectionCard;
