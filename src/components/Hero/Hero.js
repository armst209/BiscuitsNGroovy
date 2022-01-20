//react imports
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
//img imports
import hero_image from "../../assets/images/hero-image.webp";

//component imports
import Button from "../WrapperComponents/Button/Button";

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
                    Stream and collect exclusive{" "}
                    <NavHashLink
                      className="hero-subtitle-link"
                      smooth
                      to="#whats-a-biscuit"
                    >
                      biscuits
                    </NavHashLink>{" "}
                    from your favorite artists. Prove your fandom
                  </div>
                  <div className="hero-buttons">
                    <Button
                      className="start-button-container _button"
                      align="center"
                    >
                      <NavHashLink
                        className="start-button-link"
                        smooth
                        to="/#music-showcase-return"
                      >
                        <span>Start Your Collection</span>
                      </NavHashLink>
                    </Button>
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
