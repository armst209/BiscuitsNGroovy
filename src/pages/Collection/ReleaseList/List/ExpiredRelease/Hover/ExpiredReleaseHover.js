//styles
import styles from "./ExpiredReleaseHover.module.scss";

//svg imports
import { ReactComponent as InsertIcon } from "../../../../../../assets/images/love-song2.svg";
import { ReactComponent as NFTIcon } from "../../../../../../assets/images/nftimage.svg";

/**
 *TODO: find proper mobile icons
 */
const ExpiredReleaseHover = ({ showNFTView, showInsertView, release }) => {
  return (
    <section id={styles["expired-hover"]}>
      <div className={styles["nft-hover-wrapper"]}>
        <button onClick={() => showNFTView()}>
          <div className={styles["nft-hover-name"]}>View NFT</div>
        </button>
        {/* if both insert links are empty the "View Insert" button won't display */}
        {!release.insert_link_1 && !release.insert_link_2 ? (
          ""
        ) : (
          <button onClick={() => showInsertView()}>
            <div className={styles["nft-hover-name"]}>View Insert</div>
          </button>
        )}
      </div>
      {/* MOBILE VIEW: display:none above 768px */}
      <div className={styles["expired-hover-mobile-icons"]}>
        {/* if both insert links are empty the "View Insert" button won't display */}
        {!release.insert_link_1 && !release.insert_link_2 ? (
          ""
        ) : (
          <div className={styles["insert-mobile-icon-container"]}>
            <InsertIcon onClick={() => showInsertView()} />
            <span className={styles["insert-span"]}>INSERT</span>
          </div>

        )}
        <div className={styles["nft-mobile-icon-container"]}>
          <NFTIcon className={styles["nft-mobile-icon"]} onClick={() => showNFTView()} />
          <span className={styles["nft-span"]}>NFT</span>
        </div>

      </div>
    </section>
  );
};

export default ExpiredReleaseHover;
