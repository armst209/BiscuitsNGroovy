//styles
import styles from "./KnowYourCollection.module.scss";

//router imports
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

//svg imports
import { ReactComponent as RecordFavorite } from "../../assets/images/vinyl_yellow.svg";
import { ReactComponent as RecordHeaderIcon } from "../../assets/images/compact-disc-yellow.svg";
import { ReactComponent as Question } from "../../assets/images/question2.svg";

function KnowYourCollection() {
  return (
    <section id={styles.kyc}>
      <div id="whats-a-biscuit"></div>
      <div className={styles["kyc-title"]}>
        <RecordHeaderIcon className={styles["record-header-icon"]} />
        <h1>What's a Biscuit?</h1>
      </div>

      <div className={styles["kyc-subtitle"]}>
        It’s not just a delicious pastry. Our biscuits are new-age digital
        records. Much like a traditional record, each BnG biscuit has 3 parts:
      </div>

      <div className={styles["kyc-content-wrapper"]}>
        <div className={styles["kyc-info-boxes"]}>
          <RecordFavorite />
          <p>
            <span>Early Streaming</span>
            <span className={styles["kyc-hyphen"]}> - </span>Stream new music
            here during our limited release window, before it drops anywhere
            else.
          </p>
        </div>
        <div className={styles["kyc-info-boxes"]}>
          <RecordFavorite />
          <p>
            <span>Digital Album Cover</span>
            <span className={styles["kyc-hyphen"]}> - </span>Build your
            collection of album art to prove you’re a top fan. Each cover is
            secured by an NFT to guarantee its authenticity. Our NFTs are simple
            & eco-friendly. Learn more{" "}
            <HashLink to="/faq#nft-scroll-purchase">here</HashLink>
          </p>
        </div>
        <div className={styles["kyc-info-boxes"]}>
          <RecordFavorite />
          <p>
            <span>Special Insert</span>
            <span className={styles["kyc-hyphen"]}> - </span>Engage deeper with
            a surprise digital insert dreamed up by the artist. From personal
            commentary to exclusive audio or even their best meme, you never
            know what you might get!
          </p>
        </div>
        <div className={styles["kyc-info-box-footer"]}>
          <Question />
          <p>
            Why biscuits? Learn how we got our name{" "}
            <Link to="/about">here</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default KnowYourCollection;
