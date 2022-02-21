

//component imports
import ReleaseCard from "../../ReleaseCard/ReleaseCard";

//styles
import styles from "./MusicShowcaseList.module.scss";

const MusicShowcaseList = ({ releaseData, noReleaseDataComponent }) => {

  return (
    //** if user has already purchased a release, it is filtered out by "release.purchased" check*/
    <div className={styles["music-showcase-list-grid"]}>
      {releaseData.length === 0
        ? noReleaseDataComponent
        : releaseData.map((release) => {
          return release.purchased ? (
            ""
          ) : (
            <ReleaseCard data-testid="release-card-testing" key={release.id} release={release} />
          );
        })}
    </div>
  );
};

export default MusicShowcaseList;