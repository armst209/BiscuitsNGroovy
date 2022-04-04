
//component imports
import ReleasedReleases from "./FilteredReleases/ReleasedReleases";
import LiveReleases from "./FilteredReleases/LiveReleases";

//styles
import styles from "../CollectionReleases.module.scss"

const CollectionReleaseList = ({ releaseData }) => {

    //filters expired releases
    const filteredReleasedReleases = releaseData?.filter((release) => {
        return release.isExpired;
    });

    //filters live releases
    const filteredLiveReleases = releaseData?.filter((release) => {
        return !release.isExpired;
    });


    return (
        <div className={styles["collection-release-list"]}>
            <LiveReleases filteredLiveReleases={filteredLiveReleases} />
            {filteredReleasedReleases.length === 0 ? "" : <ReleasedReleases filteredReleasedReleases={filteredReleasedReleases} />}
        </div>
    )
}

export default CollectionReleaseList