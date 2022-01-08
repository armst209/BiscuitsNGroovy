import { Link } from "react-router-dom";
import styles from "./ArtistReminder.module.scss";
import { ReactComponent as ArtistIcon } from "../../../assets/images/speaker_yellow.svg";
//CSS uses BEM
//CSS with css modules
const ArtistReminder = () => {
  return (
    <section id={styles["artist-reminder"]}>
      <div className={styles.artist_reminder__wrapper}>
        <div className={styles.artist_reminder__inner_wrapper}>
          <div className={styles.artist_reminder__message}>
            <div className={styles.artist_reminder__header}>
              <ArtistIcon className={styles.artist_reminder__img} />
              <h1 className={styles.artist_reminder__h1}>ATTENTION ARTISTS</h1>
              <ArtistIcon
                className={`${styles.artist_reminder__img} ${styles.artist_reminder__right_speaker}`}
              />
            </div>

            <div className={styles.artist_reminder__tired_container}>
              <div className={styles.artist_reminder__tired_header}>
                TIRED OF MAKING PENNIES FROM STREAMING?
              </div>
              <div className={styles.artist_reminder__tired_message}>
                We’ll help you earn more money and connect with your top fans.
                Learn more about the benefits of releasing your music on BnG
              </div>
            </div>

            <Link className={styles.artist_reminder__link} to="/artists">
              <button>For Artists</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistReminder;
