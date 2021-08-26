import React from "react";
import { Link } from "react-router-dom";
import hero_image from "../../assets/images/Dani1.png";
import "./TestHeroStyles.scss";

function TestHero() {
  return (
    <>
      <section id="hero-test">
        <div className="hero-nav-spacer"></div>

        <div className="hero-section-test">
          <div className="hero-section-outer-wrapper-test">
            <div className="hero-content-middle-wrapper-test">
              {" "}
              <div className="hero-section-inner-wrapper-test">
                <section className="hero-test-text">
                  <div>
                    <h1>
                      NEW <br /> MUSIC <br /> IS OUR <br />
                      JAM
                    </h1>
                  </div>
                  <div className="hero-test-subtitle">
                    Stream exclusive music from your favorite artists, and
                    collect NFT album art Available only for a limited time,
                    only for true fans.
                  </div>
                  <div className="hero-test-buttons">
                    <Link to="#music-showcase">
                      <button className="start-btn">
                        Start Your Collection
                      </button>
                    </Link>
                    <Link to="/artists">
                      <button className="for-artists-btn">For Artists</button>
                    </Link>
                  </div>
                </section>
                <section className="hero-test-image">
                  {/* <img src={hero_image} alt="hero" /> */}
                </section>
              </div>
            </div>
          </div>
        </div>
        <img className="hero-image" src={hero_image} alt="dani1" />
      </section>
    </>
  );
}

export default TestHero;
