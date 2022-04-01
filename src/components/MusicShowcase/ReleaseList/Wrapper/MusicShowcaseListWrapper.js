
//component imports
import MusicShowcaseList from "../List/MusicShowcaseList";

//styles
import styles from "./MusicShowcaseListWrapper.module.scss";

const MusicShowcaseListWrapper = ({ releaseData }) => {

  return (
    <div className={releaseData.length <= 2 ? styles["single-release-in-grid"] : styles["music-showcase-list-grid"]}>
      <MusicShowcaseList releaseData={releaseData} />
    </div>
  );
};

export default MusicShowcaseListWrapper;