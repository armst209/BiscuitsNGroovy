//component imports
import ExpiredRelease from "../ExpiredRelease/ExpiredRelease";

//styles
import styles from "../../CollectionReleases.module.scss"

const ReleasedReleasesMap = ({ filteredReleasedReleases }) => {

    return (
        <div className={filteredReleasedReleases.length < 4 ? styles["single-release-in-grid"] : styles["release-released-grid"]}>
            {filteredReleasedReleases.map((release) => {
                return <ExpiredRelease key={release.id} release={release} />;
            })}
        </div>
    )
}

export default ReleasedReleasesMap