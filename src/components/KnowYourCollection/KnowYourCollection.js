//styles

import styles from "./KnowYourCollection.module.scss";

import { HashLink } from "react-router-hash-link";

import { ReactComponent as RecordFavorite } from "../../assets/images/vinyl_yellow.svg";
import { ReactComponent as RecordHeaderIcon } from "../../assets/images/compact-disc-yellow.svg";

function KnowYourCollection() {
  return (
    <section id={styles.kyc}>
      <div className={styles["kyc-title"]}>
        <RecordHeaderIcon className={styles["record-header-icon"]} />
        <h1>KNOW YOUR COLLECTION</h1>
      </div>

      <div className={styles["kyc-subtitle"]}>
        Every purchase includes a limited-edition digital album cover NFT.
        That’s a mouthful, so we’ve broken down what it means.
      </div>

      <div className={styles["kyc-content-wrapper"]}>
        <div className={styles["kyc-info-boxes"]}>
          <RecordFavorite />
          <p>
            <span>Limited-Edition</span>
            <span className={styles["kyc-hyphen"]}> - </span>album art exclusive
            to the BnG drop, unavailable anywhere else
          </p>
        </div>
        <div className={styles["kyc-info-boxes"]}>
          <RecordFavorite />
          <p>
            <span>Digital</span>
            <span className={styles["kyc-hyphen"]}> - </span> album covers stay
            in your collection permanently, even after the music is no longer
            streaming on BnG. Log in to easily access & share your collection
          </p>
        </div>
        <div className={styles["kyc-info-boxes"]}>
          <RecordFavorite />
          <p>
            <span>Album Cover</span>
            <span className={styles["kyc-hyphen"]}> - </span>beautiful art
            designed specifically to accompany a record. We put it front and
            center, where it belongs
          </p>
        </div>
        <div className={styles["kyc-info-boxes"]}>
          <RecordFavorite />
          <p>
            <span>NFT (non-fungible token)</span>
            <span className={styles["kyc-hyphen"]}> - </span>a digital
            collectible whose ownership is recorded on the blockchain - aka a
            permanent, democratized database. Our NFTs are simple, secure, and
            non-polluting. Learn more{" "}
            <HashLink to="/faq#nft-scroll-purchase">here</HashLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default KnowYourCollection;
