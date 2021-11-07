import "./MusicShowcaseStyles.scss";
import ReleaseList from "../ReleaseContent/ReleaseList/ReleaseList";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import env from "react-dotenv";
import useFetch from "../../customHooks/Fetch/useFetch";
import { ReactComponent as SpotLightYellowLeft } from "../../assets/images/spotlight_outline_left_yellow.svg";
import { ReactComponent as SpotLightYellowRight } from "../../assets/images/spotlight_outline_right_yellow.svg";
import showcase from "../../assets/images/showcase_mobile.webp";
import NoReleasesMusicShowcase from "../ReleaseContent/ReleaseList/NoReleases/NoReleasesMusicShowcase";

const MusicShowcase = () => {
  //TOKEN
  const token = localStorage.getItem("token");
  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useFetch(`${env.BACKEND_URL}/releases`, {
    headers: { "x-access-token": token },
  });

  return (
    <section id="music-showcase">
      {/* ======SVGs====== */}
      <SpotLightYellowLeft className="spotlight-top-left" />
      <SpotLightYellowRight className="spotlight-top-right" />
      {/* ======SVGs====== */}
      <div className="music-showcase-container">
        <div className="music-showcase-content-container">
          <h1>MUSIC SHOWCASE</h1>
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
