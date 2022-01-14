import styles from "./ExpiredReleaseHover.module.scss";

const ExpiredReleaseHover = ({ showNFTView, showInsertView }) => {
  return (
    <section id={styles["nft-hover"]}>
      <div className={styles["nft-hover-wrapper"]}>
        <button onClick={() => showNFTView()}>
          <div className={styles["nft-hover-name"]}>View NFT</div>
        </button>
        <button onClick={() => showInsertView()}>
          <div className={styles["nft-hover-name"]}>View Insert</div>
        </button>
      </div>
    </section>
  );
};

export default ExpiredReleaseHover;
