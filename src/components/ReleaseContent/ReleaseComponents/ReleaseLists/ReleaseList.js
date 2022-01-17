//react imports
import { memo } from "react";

//component imports
import ReleaseCard from "../ReleaseCard/ReleaseCard";

const ReleaseList = memo(({ releaseData, noReleaseDataComponent }) => {
  return (
    //**displays different "NoReleases" component depending on whats passed as noReleaseDataComponent prop
    //** if user has already purchased a release, it is filtered out by "release.purchased" check*/
    //**TODO: memoizes releaseData prop so component only re-renders when this component's props change, need to check if this is being used correctly */
    <>
      {releaseData.length === 0
        ? noReleaseDataComponent
        : releaseData.map((release) => {
            return release.purchased ? (
              ""
            ) : (
              <ReleaseCard key={release.id} release={release} />
            );
          })}
    </>
  );
});

export default ReleaseList;
