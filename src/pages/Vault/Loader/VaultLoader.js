//styles
import styles from "./VaultLoader.module.scss"

//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg"

const VaultLoader = () => {
    return (
        <div className={styles["vault-loader"]}>
            <RecordSpinner className="rotate" />
        </div>
    )
}

export default VaultLoader