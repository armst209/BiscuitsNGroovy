
//component imports
import NoReleasesMusicShowcase from "../../../../components/ReleaseContent/ReleaseComponents/NoReleases/NoReleasesMusicShowcase";
import MusicShowcaseList from "../List/MusicShowcaseList";

//styles
import styles from "./MusicShowcaseListWrapper.module.scss";

const MusicShowcaseListWrapper = ({ releaseData }) => {

  return (
    <div className={styles["music-showcase-list-grid"]}>
      {releaseData.length === 0
        ? <NoReleasesMusicShowcase />
        : <MusicShowcaseList releaseData={releaseData} />
      }
    </div>
  );
};

export default MusicShowcaseListWrapper;