//styles
import styles from "./BiscuitInsert.module.scss";


const BiscuitInsert = ({
 toggleInsertModal,
  release,
}) => {
  return (
    <section id={styles["biscuit-insert"]}>
      <div
        className={styles["biscuit-insert-close"]}
        onClick={() => toggleInsertModal()}
      >
        X
      </div>
      <div className={styles["biscuit-insert-container"]}>
        {!release.insert_link_2 ? "": <div className={styles["biscuit-insert-iframe-container-1"]}>
          <iframe
            src={`${release.insert_link_2}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={release.title}
          >
          </iframe>
        </div>}
        {!release.insert_link_1 ? "": <div className={styles["biscuit-insert-iframe-container-2"]}>
          <iframe
            src={`${release.insert_link_1}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={release.title}
          ></iframe>
        </div>}
      </div>
    </section>
  );
};

export default BiscuitInsert;
