import { React, useEffect, useState, Suspense } from "react";
import env from "react-dotenv";
import axios from "axios";
import FPHomepage from "../../components/FanPortal/FPHomePage/FPHomePage";
import "./CollectionStyles.scss";
import Loading from "../../components/Loading/Loading";
// import spotlight_left from "../../../../assets/images/spotlight_outline_left_yellow.svg";
// import spotlight_right from "../../../../assets/images/spotlight_outline_right_yellow.svg";
import NoReleases from "../../components/FanPortal/FPHomePage/Sections/NewLibrary/NoReleases";
import ComponentLoading from "../../components/Loading/ComponentLoading";

function FanPortal() {
  //Hooks
  const [releaseData, setReleaseData] = useState(null);
  const [showAlbumDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //token
    const token = localStorage.getItem("token");

    //Request for Library
    axios({
      method: "get",
      url: `${env.BACKEND_URL}/library`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        setReleaseData(res.data.library);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="fan-portal">
      <div className="portal-title">
        <h1>
          {/* <img
            className="spotlight-left"
            src={spotlight_left}
            alt="spotlight"
          />
          <img
            className="spotlight-right"
            src={spotlight_right}
            alt="spotlight"
          /> */}
          COLLECTION
        </h1>
      </div>
      {isLoading && <ComponentLoading />}
      {releaseData !== null && releaseData.length === 0 ? (
        <NoReleases />
      ) : (
        releaseData && (
          <FPHomepage releaseData={releaseData} setTrigger={showAlbumDetails} />
        )
      )}
    </section>
  );
}

export default FanPortal;
