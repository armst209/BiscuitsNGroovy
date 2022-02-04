//styles
import styles from "./MusicShowcase.module.scss";

//component imports
import MusicShowcaseList from "../ReleaseContent/ReleaseComponents/ReleaseLists/MusicShowcaseList/MusicShowcaseList";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import NoReleasesMusicShowcase from "../ReleaseContent/ReleaseComponents/NoReleases/NoReleasesMusicShowcase";

//react imports
import useTestAxiosFetch from "../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";

//image imports
import { ReactComponent as RecordHeaderIcon } from "../../assets/images/compact-disc-yellow.svg";
import showcase from "../../assets/images/showcase-outline.webp";


const MusicShowcase = () => {
  //TOKEN
  let token = localStorage.getItem("token");

  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useTestAxiosFetch({
    url:`${process.env.REACT_APP_BACKEND_URL}/releases`, 
    method:"GET",
    headers: { "x-access-token": token },
  });

  return (
    <section id={styles["music-showcase"]}>
      <div id="music-showcase-return"></div>
      <div className={styles["music-showcase-container"]}>
        <div className={styles["music-showcase-content-container"]}>
          <h1>
            <div>MUSIC SHOWCASE</div>
            <RecordHeaderIcon className={styles["record-header-icon"]} />
          </h1>

          <p className={styles["music-showcase-sub-title"]}>
            Available biscuits shown below. Click on a title for more details
          </p>
          <div className={styles["music-showcase-content-wrapper"]}>
            {isLoading && <ComponentLoading />}
            {errorMessage === null ? (
              releaseData && (
                <MusicShowcaseList
                  releaseData={releaseData.releases}
                  noReleaseDataComponent={<NoReleasesMusicShowcase />}
                />
              )
            ) : (
              <div>{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
      <div className={styles["music-showcase-bottom-image-container"]}>
        <img
          className={styles["music-showcase-bottom-image"]}
          src={showcase}
          alt="microphone"
        />
      </div>
    </section>
  );
};

export default MusicShowcase;
