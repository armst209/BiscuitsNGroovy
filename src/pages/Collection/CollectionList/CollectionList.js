import ReleaseCard from "../../../components/MusicShowcase/Release/ReleaseCard/ReleaseCard";

const CollectionList = ({ releaseData }) => {
  const releases = releaseData.library;
  return (
    //ONLY MAPS THROUGH RELEASE CARDS AND DISPLAYS THEM
    <>
      {releases.map((release) => {
        return <ReleaseCard key={release.id} release={release} />;
      })}
    </>
  );
};

export default CollectionList;
