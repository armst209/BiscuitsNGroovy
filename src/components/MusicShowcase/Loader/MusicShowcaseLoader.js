//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

//styles
import styles from "../MusicShowcase.module.scss"

const MusicShowcaseLoader = () => {
    return (
        <div className={styles["music-showcase-loader"]}>
            <RecordSpinner className="rotate" />
        </div>
    )
}
export default MusicShowcaseLoader