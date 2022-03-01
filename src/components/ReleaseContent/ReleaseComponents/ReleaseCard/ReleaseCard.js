import MusicShowcaseCard from "../../../MusicShowcase/Card/MusicShowcaseCard";
import CollectionCard from "../../../../pages/Collection/CollectionCard/CollectionCard";

const ReleaseCard = ({ release }) => {
  //**  if there is a "songs" & "isPlayable" property/check in the release object it will display CollectionCard, if not it displays MusicShowcaseCard */

  return release.hasOwnProperty("songs") &&
    release.hasOwnProperty("isPlayable") ? (
    //release card for Collection
    <CollectionCard release={release} />
  ) : (
    //release card for MusicShowcase
    <MusicShowcaseCard release={release} />
  );
};

export default ReleaseCard;
