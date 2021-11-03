import "../../MusicShowcase/MusicShowcaseStyles.scss";
import ReleaseCard from "../Release/ReleaseCard/ReleaseCard";

const ReleaseList = ({ releaseData, noReleaseDataComponent }) => {
  return (
    //ONLY MAPS THROUGH RELEASE CARDS AND DISPLAYS THEM
    <>
      {releaseData.length === 0
        ? noReleaseDataComponent
        : releaseData.map((release) => {
            return <ReleaseCard key={release.id} release={release} />;
          })}
    </>
  );
};

export default ReleaseList;
