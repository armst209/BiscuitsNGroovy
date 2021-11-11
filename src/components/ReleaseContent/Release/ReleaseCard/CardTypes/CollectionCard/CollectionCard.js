import AvailableRelease from "../../CardViews/AvailableRelease/AvailableRelease";
import ExpiredRelease from "../../CardViews/ExpiredRelease/ExpiredRelease";

const CollectionCard = ({ release }) => {
  console.log(release.songs);
  return release.isExpired === true ? (
    <ExpiredRelease release={release} />
  ) : (
    <AvailableRelease release={release} />
  );
};

export default CollectionCard;
