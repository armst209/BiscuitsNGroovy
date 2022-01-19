//styles
import styles from "./MusicShowcase.module.scss";

//component imports
import ReleaseList from "../ReleaseContent/ReleaseComponents/ReleaseLists/ReleaseList";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import NoReleasesMusicShowcase from "../ReleaseContent/ReleaseComponents/NoReleases/NoReleasesMusicShowcase";

//react imports
import useFetch from "../../customHooks/Fetch/useFetch";

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
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/releases`, {
    headers: { "x-access-token": token },
  });

  return (
    <section id='music-showcase' className={styles["music-showcase"]}>
      <div className={styles["music-showcase-container"]}>
        <div className={styles["music-showcase-content-container"]}>
          <h1>
            <div>MUSIC SHOWCASE</div>
            <RecordHeaderIcon className={styles["record-header-icon"]} />
          </h1>

          <p className={styles["music-showcase-sub-title"]}>
            Browse our current and upcoming releases. Click on a title for more
            details
          </p>
          <div className={styles["music-showcase-content-wrapper"]}>
            <div className={styles["music-showcase-grid"]}>
              {isLoading && <ComponentLoading />}
              {errorMessage === null ? (
                releaseData && (
                  <ReleaseList
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
