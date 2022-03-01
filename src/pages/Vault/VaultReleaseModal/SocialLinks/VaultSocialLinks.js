//styles
import styles from "./VaultSocialLinks.module.scss"

const VaultSocialLinks = ({ social }) => {

    const socialLinks = (socialLink) => {
        if (/spotify/.test(socialLink)) {
            return (
                <a
                    href={socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["spotify"]}
                >
                    <i className="fab fa-spotify"></i>
                </a>
            )

        } else if (/tiktok/.test(socialLink)) {
            return (
                <a
                    href={socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['tiktok']}
                >
                    <i className="fab fa-tiktok"></i>
                </a>)

        }
    }

    return (
        <>{socialLinks(social)}</>
    )
}

export default VaultSocialLinks