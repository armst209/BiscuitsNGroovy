import "./MusicShowcaseStyles.scss";

import ReleaseList from "../ReleaseContent/ReleaseList/ReleaseList";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import useFetch from "../../customHooks/Fetch/useFetch";
import showcase from "../../assets/images/showcase-outline.webp";
import NoReleasesMusicShowcase from "../ReleaseContent/ReleaseList/NoReleases/NoReleasesMusicShowcase";
import { ReactComponent as RecordHeaderIcon } from "../../assets/images/compact-disc-yellow.svg";

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
    <section id="music-showcase">
      <div className="music-showcase-container">
        <div className="music-showcase-content-container">
          <h1>
            <div>MUSIC SHOWCASE</div>
            <RecordHeaderIcon className="record-header-icon" />
          </h1>

          <p className="music-showcase-sub-title">
            Browse our current and upcoming releases. Click on a title for more
            details
          </p>
          <div className="music-showcase-content-wrapper ">
            <div className="music-showcase-grid">
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
      <div className="music-showcase-bottom-image-container">
        <img
          className="music-showcase-bottom-image"
          src={showcase}
          alt="microphone"
        />
      </div>
    </section>
  );
};

export default MusicShowcase;
