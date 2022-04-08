//styles
import styles from "./VaultReleaseModalRightSide.module.scss";

//component imports
import Button from "../../../../../common/components/UI/Button/Button";
import ReleaseTracklist from "../../../../../common/components/ReleaseContent/ReleaseComponents/ReleaseTracklist/ReleaseTracklist";

const VaultReleaseModalRightSide = ({ release, showHideVaultReleaseDescriptionHandler }) => {
  const { release_description, playlist } = release;

  return (
    <div className={styles["modal-body-right-side"]}>
      <p className={styles["modal-body-release-description"]}>{release_description}</p>
      <Button onClick={() => showHideVaultReleaseDescriptionHandler()} className="_button">
        Learn More
      </Button>
      <ReleaseTracklist songs={playlist} />
    </div>
  );
};

export default VaultReleaseModalRightSide;
