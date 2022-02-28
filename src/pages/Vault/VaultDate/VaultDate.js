//style
import styles from "./VaultDate.module.scss"

//utility imports
import { dateConverter } from "../../../utils/UtilityFunctions"

const VaultDate = ({ startDate, endDate }) => {
    return (
        <div className={styles["date-wrapper"]}>
            <span className={styles["date"]}>
                {dateConverter(startDate)} - {dateConverter(endDate)}
            </span>
        </div>
    )
}

export default VaultDate