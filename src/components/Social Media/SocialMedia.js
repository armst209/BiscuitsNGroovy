import React from "react";
import "./SocialMediaStyles.scss";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul>
        <li>
          <a href="https://www.instagram.com/bngroovymusic/">
            <i className="fab fa-instagram "></i>
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/ajxyu54lfjlxoc8a7dzx59odj?si=crL_VRaXSUiBRDEW8-31xg&nd=1">
            <i className="fab fa-spotify"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bngroovy">
            <i className="fab fa-twitter-square"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
