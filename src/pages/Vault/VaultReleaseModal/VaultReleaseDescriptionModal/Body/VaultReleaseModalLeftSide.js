//styles
import styles from "./VaultReleaseModalLeftSide.module.scss"

//component imports
import VaultDate from "../../../VaultDate/VaultDate";
import ReleaseImage from "../../../../../components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";
import VaultSocialLinks from "../../SocialLinks/VaultSocialLinks";

const VaultReleaseModalLeftSide = ({ release }) => {

    const { start_date, end_date, release_art, release_name, artist_name, social } = release;

    return (
        <div className={styles["modal-body-left-side"]}>
            <div className={styles["modal-body-left-release-image-container"]}>
                <ReleaseImage
                    releaseImageSrc={release_art}
                    alt={`${release_name} biscuit`}
                />
            </div>
            <h1>{artist_name}</h1>
            <p
                className={styles["modal-release-name"]}
                data-testid="vault-release-name"
            >{release_name}</p>
            <VaultDate startDate={start_date} endDate={end_date} />
            <VaultSocialLinks social={social} />
        </div>
    )
}

export default VaultReleaseModalLeftSide