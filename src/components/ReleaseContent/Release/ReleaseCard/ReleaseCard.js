import "./ReleaseCardStyles.scss";
import MusicShowcaseCard from "./CardTypes/MusicShowcaseCard/MusicShowcaseCard";
import CollectionCard from "./CardTypes/CollectionCard/CollectionCard";

const ReleaseCard = ({ release }) => {
  // if there is a "songs" & "isPlayable" property in the release object it will display CollectionCard, if not displays MusicShowcaseCard

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
