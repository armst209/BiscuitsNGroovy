import styles from "./BiscuitInsert.module.scss";
const BiscuitInsert = ({
  showHideBiscuitInsertHandler,
  showHideMusicPlayerContainerHandler,
  release,
}) => {
  return (
    <section id={styles["biscuit-insert"]}>
      <div
        className={styles["biscuit-insert-close"]}
        onClick={() => {
          showHideBiscuitInsertHandler();
          showHideMusicPlayerContainerHandler();
        }}
      >
        X
      </div>
      <div className={styles["biscuit-insert-container"]}>
        <div className={styles["biscuit-insert-iframe-container-1"]}>
          <iframe
            // src="https://player.vimeo.com/video/666613961?h=d72eaedb5e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            src={`${release.insert_link_2}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Pink Walls Music Video.mp4"
          ></iframe>
        </div>
        <div className={styles["biscuit-insert-iframe-container-2"]}>
          <iframe
            // src="https://player.vimeo.com/video/666615717?h=d3b17f1430&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

            src={`${release.insert_link_1}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Elle Lexxa Animation.mp4"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BiscuitInsert;
