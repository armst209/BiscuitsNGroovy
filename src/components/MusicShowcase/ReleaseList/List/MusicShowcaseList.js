
//component imports
import MusicShowcaseCard from "../../Card/MusicShowcaseCard";


const MusicShowcaseList = ({ releaseData }) => {
  return (
    //** if user has already purchased a release, it is filtered out by "release.purchased" check*/
    releaseData.map((release) => {
      return release.purchased ? (
        ""
      ) : (
        <MusicShowcaseCard data-testid="release-card-testing" release={release} />
      );
    }))
}

export default MusicShowcaseList