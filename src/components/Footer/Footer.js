import { Link } from "react-router-dom";
import SocialMedia from "../Social Media/SocialMedia";
import { ReactComponent as FooterLogo } from "../../assets/images/bng_test.svg";

import "./FooterStyles.scss";

function Footer() {
  return (
    <section id="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <FooterLogo />
        </div>

        <div className="footer-information">
          <div className="footer-links-wrapper">
            <div className="footer-links">
              <ul>
                <h4>Company</h4>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/faq">FAQ</Link>
              </ul>

              <ul>
                <h4>Reach Out</h4>
                <Link to="/artists">Artists</Link>
                <a href="mailto:support@bngroovy.com?subject=Support">
                  Support
                </a>
              </ul>
            </div>
          </div>

          <div className="footer-social-media">
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="footer-paragraph">
        <p>
          True fans get more on Biscuits n Groovy. Stream exclusive music from
          your favorite artists, and collect NFT album art
        </p>
      </div>
      <div className="footer-privacy-term-links">
        <Link to="/privacy-terms-of-use">Privacy Policy & Terms of Use</Link>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Biscuits n Groovy, LLC </p>
      </div>
    </section>
  );
}

export default Footer;
