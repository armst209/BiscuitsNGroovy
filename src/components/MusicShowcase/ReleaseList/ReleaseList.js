import "../MusicShowcaseStyles.scss";
import ReleaseCard from "../Release/ReleaseCard/ReleaseCard";

const ReleaseList = ({ releaseData }) => {
  const releases = releaseData.releases;

  return (
    //ONLY MAPS THROUGH RELEASE CARDS AND DISPLAYS THEM
    <>
      {releases.map((release) => {
        return <ReleaseCard key={release.id} release={release} />;
      })}
    </>
  );
};

export default ReleaseList;
