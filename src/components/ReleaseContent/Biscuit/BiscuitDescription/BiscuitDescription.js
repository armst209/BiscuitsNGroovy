import styles from "./BiscuitDescription.module.scss";

const BiscuitDescription = ({ release, showHideBiscuitDescriptionHandler }) => {
  return (
    <div className={styles["biscuit-description"]}>
      <div
        className={styles["biscuit-description-close"]}
        onClick={() => showHideBiscuitDescriptionHandler()}
      >
        X
      </div>
      {release.description}
    </div>
  );
};

export default BiscuitDescription;
