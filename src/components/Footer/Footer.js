import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.scss";

function Footer() {
  return (
    <section id="footer">
      <section className="footer-content">
        <p>
          True fans listen first on Biscuits n Groovy Get early access to new
          releases from your favorite artists, and exclusive NFT album art
        </p>
      </section>
      <section className="footer-links">
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </ul>
        <ul>
          <Link to="/login">Login</Link>
          <Link to="/artists">Artists</Link>
        </ul>
      </section>
      <p>© Biscuits & Groovy {new Date().getFullYear()}</p>
    </section>
  );
}

export default Footer;
