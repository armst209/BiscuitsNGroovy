//styles
import styles from "../Collection.module.scss"

//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg"

const CollectionLoader = () => {
    return (
        <div className={styles["collection-loader"]}>
            <RecordSpinner className="rotate" />
        </div>
    )
}

export default CollectionLoader