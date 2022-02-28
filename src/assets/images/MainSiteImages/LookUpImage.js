
//styles
import styles from "./LookUpImage.module.scss"
//image
import LookUpWebp from "../showcase-outline.webp";

const LookUpImage = () => {
    return (
        <div className={styles["look-up-image-container"]}>
            <img
                className={styles["look-up-image"]}
                src={LookUpWebp}
                alt="bng artist"
            />
        </div>
    )
}

export default LookUpImage