import React from "react";
import hero_image from "../../assets//images/808s_&_Heartbreak.png";
import "./TestHeroStyles.scss";

import HeroHomeNavigation from "../../components/Navbars/HeroHomeNavigation/HeroHomeNavigation";

function TestHero({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
  setShowMobileNav,
  showMobileNav,
}) {
  return (
    <>
      <section id="hero-test">
        <HeroHomeNavigation
          loginPopup={loginPopup}
          signUpPopup={signUpPopup}
          showLoginPopup={showLoginPopup}
          showSignUpPopup={showSignUpPopup}
          setShowMobileNav={setShowMobileNav}
          showMobileNav={showMobileNav}
        />

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
                    <button className="start-btn">Start Your Collection</button>
                    <button className="for-artists-btn">For Artists</button>
                  </div>
                </section>
                <section className="hero-test-image">
                  <img src={hero_image} alt="hero" />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestHero;
