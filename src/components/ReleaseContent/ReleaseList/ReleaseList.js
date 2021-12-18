import "../../MusicShowcase/MusicShowcaseStyles.scss";
import ReleaseCard from "../Release/ReleaseCard/ReleaseCard";
import { memo } from "react";
const ReleaseList = memo(({ releaseData, noReleaseDataComponent }) => {
  return (
    //ONLY MAPS THROUGH RELEASE CARDS AND DISPLAYS THEM
    //displays different "NoReleases" component dependent on whats passed as noReleaseDataComponent prop
    <>
      {releaseData.length === 0
        ? noReleaseDataComponent
        : releaseData.map((release) => {
            return <ReleaseCard key={release.id} release={release} />;
          })}
    </>
  );
});

export default ReleaseList;
