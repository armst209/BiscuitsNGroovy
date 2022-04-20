//react imports
import { NavHashLink } from "react-router-hash-link";

//ui imports
import Image from "../../UI/Image/Image";
import { useTheme } from "@mui/material";

//img imports
import HeroImage from "../../assets/images/hero-image.webp";

//styles
import styles from "./Hero.module.scss";

console.log(styles["hero-image"]);

const Hero = () => {
  const theme = useTheme();
  return (
    <section id={styles.hero}>
      <div className={styles["hero-section"]}>
        <div className={styles["hero-section-outer-wrapper"]}>
          <div className={styles["hero-content-middle-wrapper"]}>
            <div className={styles["hero-section-inner-wrapper"]}>
              <section className={styles["hero-text"]}>
                <div className={styles["hero-title"]}>
                  <h1>
                    NEW MUSIC <br />
                    IS OUR JAM
                  </h1>
                </div>
                <div className={styles["hero-subtitle"]}>
                  Stream and collect exclusive{" "}
                  <NavHashLink
                    className={styles["hero-subtitle-link"]}
                    smooth
                    to="#whats-a-biscuit"
                  >
                    biscuits
                  </NavHashLink>{" "}
                  from your favorite artists. Prove your fandom
                </div>
                <div className={styles["hero-buttons"]}>
                  <button className={`_button ${styles["start-button-container"]}`} align="center">
                    <NavHashLink
                      className={styles["start-button-link"]}
                      smooth
                      to="/#music-showcase-return"
                    >
                      <span>Start Your Collection</span>
                    </NavHashLink>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["hero-image-container"]}>
        <Image src={HeroImage} sx={theme.components.Images.homepage.hero} />
      </div>
    </section>
  );
};

export default Hero;
