//styles
import styles from "./HowItWorksStyles.module.scss";
import { Link } from "react-router-dom";
//SVGs
import { ReactComponent as LoveSong } from "../../assets/images/love-song2.svg";
import { ReactComponent as Voice } from "../../assets/images/voice.svg";
import { ReactComponent as Collect } from "../../assets/images/collectshare.svg";
import { ReactComponent as RecordHeader } from "../../assets/images/compact-disc-yellow.svg";

function HowItWorks() {
  return (
    <section id={styles["how-it-works"]}>
      <div className={styles["how-it-works-container"]}>
        <div className={styles["box-title"]}>
          <h1>
            <RecordHeader className={styles["record-header-icon"]} />
            <div>HOW IT WORKS</div>
          </h1>
        </div>
        <div className={styles["how-it-works-boxes"]}>
          <div className={styles.box}>
            <div className={styles["box-border"]}>
              <div className={styles["box-content"]}>
                <div className={styles["how-it-works-boxes-icon-headers"]}>
                  <div className={styles["how-icon"]}>
                    <LoveSong />
                  </div>
                  <div className={styles["how-it-works-boxes-headers"]}>
                    <h4>EXCLUSIVE MUSIC</h4>
                    <h6>FOR SUPERFANS</h6>
                  </div>
                </div>
                <div className={styles.content}>
                  <div>
                    We partner with trendsetting artists to debut their
                    unreleased music on Biscuits n Groovy. Show your loyalty,
                    and support your favorite artists directly with each
                    purchase.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles["box-border"]}>
              <div className={styles["box-content"]}>
                <div className={styles["how-it-works-boxes-icon-headers"]}>
                  <div className={styles["how-icon"]}>
                    <Voice />
                  </div>
                  <div className={styles["how-it-works-boxes-headers"]}>
                    <h4>STREAM HERE</h4>
                    <h6>BEFORE IT'S GONE</h6>
                  </div>
                </div>
                <div className={styles.content}>
                  <div>
                    We're not another unlimited subscription. Buy the music you
                    want to hear, and stream with us before it drops anywhere
                    else. Get it while it’s hot, since it’s only streaming for a
                    limited time.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles["box-border"]}>
              <div className={styles["box-content"]}>
                <div className={styles["how-it-works-boxes-icon-headers"]}>
                  <div className={styles["how-icon"]}>
                    <Collect />
                  </div>
                  <div className={styles["how-it-works-boxes-headers"]}>
                    <h4>COLLECT & SHARE</h4>
                    <h6> YOUR EXCLUSIVE RECORDS</h6>
                  </div>
                </div>

                <div className={styles.content}>
                  <div className={styles["collect-and-share-content"]}>
                    With each release you collect a limited-edition digital
                    album cover NFT. Stored on the blockchain, these assets let
                    you own a permanent piece of music history and{" "}
                    <em>prove</em> you’re a top fan. Build your library and show
                    it off!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles["how-it-works-bottom-info"]}>
        Get answers and learn more about our <span>eco-friendly</span> NFTs on
        our <Link to="/faq">FAQ</Link> page
      </p>
    </section>
  );
}

export default HowItWorks;
