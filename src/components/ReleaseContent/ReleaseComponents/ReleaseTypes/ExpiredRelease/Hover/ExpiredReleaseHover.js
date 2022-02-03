//styles
import styles from "./ExpiredReleaseHover.module.scss";

//svg imports
import { ReactComponent as InsertIcon } from "../../../../../../assets/images/love-song2.svg";
import { ReactComponent as NFTIcon } from "../../../../../../assets/images/add_yellow.svg";

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
      {/* display:none above 768px */}
      <div className={styles["expired-hover-mobile-icons"]}>
        <NFTIcon onClick={() => showNFTView()} />
        <InsertIcon onClick={() => showInsertView()} />
      </div>
    </section>
  );
};

export default ExpiredReleaseHover;
