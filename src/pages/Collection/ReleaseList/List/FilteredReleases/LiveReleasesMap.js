
//styles
import styles from "../../CollectionReleases.module.scss";

//component imports
import NoLiveReleases from "./NoFilteredReleases/NoLiveReleases";
import AvailableRelease from "../AvailableRelease/AvailableRelease";

const LiveReleasesMap = ({ filteredLiveReleases }) => {
    return (
        <div className={filteredLiveReleases.length === 1 ? styles["single-release-in-grid"] : styles["release-live-grid"]}>
            {filteredLiveReleases.length === 0 ? (
                <NoLiveReleases />
            ) : (
                filteredLiveReleases.map((release) => {
                    return (
                        <AvailableRelease key={release.id} release={release} />
                    );
                })
            )}
        </div>
    )
}

export default LiveReleasesMap