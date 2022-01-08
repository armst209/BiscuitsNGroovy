import "../../../MusicShowcase/MusicShowcaseStyles.scss";
import ReleaseCard from "../../Release/ReleaseCard/ReleaseCard";
import { memo } from "react";
//styles
import styles from "./CollectionReleaseList.module.scss";
import CollectionCard from "../../Release/ReleaseCard/CardTypes/CollectionCard/CollectionCard";
import AvailableRelease from "../../Release/ReleaseCard/CardViews/AvailableRelease/AvailableRelease";
import ExpiredRelease from "../../Release/ReleaseCard/CardViews/ExpiredRelease/ExpiredRelease";
const CollectionReleaseList = memo(
  ({ releaseData, noReleaseDataComponent }) => {
    return (
      <>
        {releaseData.length === 0 ? (
          noReleaseDataComponent
        ) : (
          <section id={styles["collection-release-list"]}>
            <div>
              <h1>Live</h1>
              {releaseData.map((release) => {
                return <AvailableRelease key={release.id} release={release} />;
              })}
            </div>

            <hr />
            <div>
              <h1>Released</h1>
              {releaseData.map((release) => {
                return <ExpiredRelease key={release.id} release={release} />;
              })}
            </div>
          </section>
        )}
        ))
      </>
    );
  }
);

export default CollectionReleaseList;
