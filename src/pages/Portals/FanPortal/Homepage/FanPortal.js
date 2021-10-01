import { React, useState } from "react";

//import { withRouter } from "react-router";
import FPHomepage from "../../../../components/FanPortal/FPHomePage/FPHomePage";
import "./FanPortalStyles.scss";

import spotlight_left from "../../../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_right from "../../../../assets/images/spotlight_outline_right_yellow.svg";

function FanPortal() {
  //Props are passing down the showAlbumDetails function/hook to FPHomepage & AlbumPreview as setTrigger

  const [showAlbumDetails] = useState(false);

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
          COLLECTION
        </h1>
      </div>
      <FPHomepage setTrigger={showAlbumDetails} />
    </section>
  );
}

export default FanPortal;
