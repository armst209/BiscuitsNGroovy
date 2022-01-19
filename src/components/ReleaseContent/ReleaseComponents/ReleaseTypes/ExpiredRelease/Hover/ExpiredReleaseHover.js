import styles from "./ExpiredReleaseHover.module.scss";

const ExpiredReleaseHover = ({ showNFTView, showInsertView, release }) => {
  return (
    <section id={styles["nft-hover"]}>
      <div className={styles["nft-hover-wrapper"]}>
        <button onClick={() => showNFTView()}>
          <div className={styles["nft-hover-name"]}>View NFT</div>
        </button>
        {/* if both release links are empty the "View Insert" button won't display */}
        {!release.insert_link_1 && !release.insert_link_2 ? (
          ""
        ) : (
          <button onClick={() => showInsertView()}>
            <div className={styles["nft-hover-name"]}>View Insert</div>
          </button>
        )}
      </div>
    </section>
  );
};

export default ExpiredReleaseHover;
