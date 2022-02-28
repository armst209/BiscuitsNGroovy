
//styles
import styles from "../../CollectionReleases.module.scss"
//component imports
import LiveReleasesMap from "./LiveReleasesMap"



const LiveReleases = ({ filteredLiveReleases }) => {

    return (
        <>
            <h1 className={styles["h1-title"]}>
                <div>Live Biscuits</div>
            </h1>
            <div
                className={
                    styles["collection-release-list-live-releases-container"]
                }
            >
                <LiveReleasesMap filteredLiveReleases={filteredLiveReleases} />
            </div>
        </>
    )
}

export default LiveReleases