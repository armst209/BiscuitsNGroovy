//styles
import styles from "../Collection.module.scss"

//svg imports
import { ReactComponent as RecordVinyl } from "../../../assets/images/compact-disc-yellow.svg";

const CollectionTitle = () => {
    return (
        <div className={styles["collection-title"]}>
            <h1>
                <RecordVinyl width="50px" />
                <div>COLLECTION</div>
            </h1>
        </div>
    )
}

export default CollectionTitle