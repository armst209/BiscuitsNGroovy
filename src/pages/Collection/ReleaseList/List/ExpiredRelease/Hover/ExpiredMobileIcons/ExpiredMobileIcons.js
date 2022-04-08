//styles
import styles from "./ExpiredMobileIcons.module.scss";

//svg imports
import { ReactComponent as InsertIcon } from "../../../../../../../common/assets/images/love-song2.svg";
import { ReactComponent as NFTIcon } from "../../../../../../../common/assets/images/nftimage.svg";

const ExpiredMobileIcons = ({ release, toggleInsertModal, toggleNFTModal }) => {
  return (
    <div className={styles["expired-hover-mobile-icons"]}>
      {/* if both insert links are empty the "View Insert" button won't display */}
      {!release.insert_link_1 && !release.insert_link_2 ? (
        ""
      ) : (
        <div className={styles["insert-mobile-icon-container"]}>
          <InsertIcon onClick={() => toggleInsertModal()} />
          <span className={styles["insert-span"]}>INSERT</span>
        </div>
      )}
      <div className={styles["nft-mobile-icon-container"]}>
        <NFTIcon className={styles["nft-mobile-icon"]} onClick={() => toggleNFTModal()} />
        <span className={styles["nft-span"]}>NFT</span>
      </div>
    </div>
  );
};

export default ExpiredMobileIcons;
