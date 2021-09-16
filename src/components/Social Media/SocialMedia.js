import React from "react";
import "./SocialMediaStyles.scss";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h4>Connect With Us</h4>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/bngroovymusic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram "></i>
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/ajxyu54lfjlxoc8a7dzx59odj?si=crL_VRaXSUiBRDEW8-31xg&nd=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-spotify"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/bngroovy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/invite/CCeGre4Y4s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-discord"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
