import { React, useState } from "react";

import { withRouter } from "react-router";
import FPHomepage from "../../../../components/FanPortal/FPHomePage/FPHomePage";
import "./FanPortalStyles.scss";

import spotlight_left from "../../../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_right from "../../../../assets/images/spotlight_outline_right_yellow.svg";

function FanPortal() {
  //Props are passing down the showAlbumDetails function/hook to FPHomepage & AlbumPreview as setTrigger

  const [showAlbumDetails] = useState(false);
  // const [portalUserName, setPortalUserName] = useState("YOUR");

  // useEffect(() => {
  //   const baseURL = env.BACKEND_URL;
  //   const token = localStorage.getItem("token");

  //   axios({
  //     method: "get",
  //     url: `${baseURL}/users/me`,
  //     headers: {
  //       "x-access-token": token,
  //     },
  //   })
  //     .then((res) => {
  //       setPortalUserName(res.data.user.username);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <section id="fan-portal">
      <div className="portal-title">
        <h1>
          <img
            className="spotlight-left"
            src={spotlight_left}
            alt="spotlight"
          />
          <img
            className="spotlight-right"
            src={spotlight_right}
            alt="spotlight"
          />
          {/* adds user's username to title text */}
          {/* {portalUserName}  */}
          Collection
        </h1>
      </div>
      <FPHomepage setTrigger={showAlbumDetails} />
    </section>
  );
}

export default withRouter(FanPortal);
