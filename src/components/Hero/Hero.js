//react imports
import { HashLink } from "react-router-hash-link";
//img imports
import hero_image from "../../assets/images/hero-image.webp";

//styles
import "./HeroStyles.scss";

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero-section">
          <div className="hero-section-outer-wrapper">
            <div className="hero-content-middle-wrapper">
              <div className="hero-section-inner-wrapper">
                <section className="hero-text">
                  <div className="hero-title">
                    <h1>
                      NEW MUSIC <br />
                      IS OUR JAM
                    </h1>
                  </div>
                  <div className="hero-subtitle">
                    Stream exclusive music from your favorite artists, and
                    collect NFT album art. Available only for a limited time,
                    only for true fans.
                  </div>
                  <div className="hero-buttons">
                    <div className="start-button-container" align="center">
                      <HashLink
                        className="start-button-link"
                        to="/#music-showcase"
                      >
                        <span>Start Your Collection</span>
                      </HashLink>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <section className="hero-image-container">
          <img className="hero-image" src={hero_image} alt="hero" />
        </section>
      </section>
    </>
  );
}

export default Hero;
