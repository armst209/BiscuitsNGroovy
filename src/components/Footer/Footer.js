import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../Social Media/SocialMedia";
import "./FooterStyles.scss";

function Footer() {
  return (
    <section id="footer">
      <div className="footer-content">
        <p>
          True fans listen first on Biscuits n Groovy Get early access to new
          releases from your favorite artists, and exclusive NFT album art
        </p>
      </div>
      <div>
        <a className="button-link" href="#above-howto">
          <button className="hero-button">Start Your Collection</button>
        </a>
      </div>
      <div className="social-media">
        <p>Connect With Us:</p>
        <SocialMedia />
      </div>
      <div className="footer-links">
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/login">Login</Link>
          <Link to="/artists">Artists</Link>
        </ul>
      </div>
      <div className="copyright">
        <p>© Biscuits & Groovy {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}

export default Footer;
