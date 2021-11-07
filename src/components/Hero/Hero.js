import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import hero_image from "../../assets/images/hero.webp";
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
                  <div>
                    <h1>
                      NEW <br /> MUSIC <br /> IS OUR <br />
                      JAM
                    </h1>
                  </div>
                  <div className="hero-subtitle">
                    Stream exclusive music from your favorite artists, and
                    collect NFT album art. Available only for a limited time,
                    only for true fans.
                  </div>
                  <div className="hero-buttons">
                    <HashLink to="/#music-showcase">
                      <button className="start-btn">
                        Start Your Collection
                      </button>
                    </HashLink>
                    <Link to="/artists">
                      <button className="for-artists-btn">For Artists</button>
                    </Link>
                  </div>
                </section>
                <section className="hero-image-container">
                  <img className="hero-image" src={hero_image} alt="hero" />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
