import { React } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../Social Media/SocialMedia";
import "./FooterStyles.scss";

function Footer() {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <section id="footer">
      <div className="footer-content">
        <div className="footer-paragraph">
          <p>
            True fans listen first on Biscuits n Groovy Get early access to new
            releases from your favorite artists, and exclusive NFT album art
          </p>
        </div>
        <div className="button-plus-social">
          <div className="button-container">
            <Link to="/login" className="button-link">
              <button className="hero-button">Start Your Collection</button>
            </Link>
          </div>
          <div className="social-media">
            <p>Stay Connected</p>
            <SocialMedia />
          </div>
          <div className="support">
            <p>Support</p>
            <div>
              <p>Phone:(888)999-9999 </p>
              <p>
                <a href="mailto:team@bngroovy.com">Email Us</a>
              </p>
            </div>
          </div>
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
          <p>© {new Date().getFullYear()} Biscuits & Groovy, LLC </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
