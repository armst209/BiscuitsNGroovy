import { React, useState } from "react";
import { Redirect } from "react-router-dom";
import FPHomepage from "../../../../components/FanPortal/FPHomePage/FPHomePage";
import "./FanPortalStyles.scss";

function FanPortal() {
  //Props are passing down the showAlbumDetails function/hook to FPHomepage & AlbumPreview as setTrigger

  const [showAlbumDetails] = useState(false);

  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <section id="fan-portal">
      <div className="portal-title">
        <h1>COLLECTION</h1>
      </div>
      <FPHomepage setTrigger={showAlbumDetails} />
    </section>
  ) : (
    <Redirect to={"/"} />
  );
}

export default FanPortal;
