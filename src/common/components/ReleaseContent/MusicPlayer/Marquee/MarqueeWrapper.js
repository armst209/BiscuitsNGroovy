//styles
import styles from "./MarqueeWrapper.module.scss";

//svg imports
import { ReactComponent as RecordSpin } from "../../../../assets/images/compact-disc-yellow.svg";

//marquee import - for marquee style text display
import Marquee from "react-fast-marquee";

//framer motion import - for record spin animation
// import { motion } from "framer-motion";

const MarqueeWrapper = ({ children, recordImageClass }) => {
  return (
    <section className={styles["marquee-wrapper"]}>
      {/* <motion.img
        animate={recordSpin}
        width="30px"
        src={<RecordSpin />}
        alt="record icon"
        className={styles["marquee-image"]}
      /> */}
      <RecordSpin
        alt="record icon"
        className={`${styles["marquee-image"]} ${recordImageClass}`}
      />

      <div className={styles["marquee-header"]}>Now Playing:</div>
      <Marquee
        className={styles["marquee-scroll"]}
        direction="right"
        gradient={false}
        style={{
          color: "var(--color1)",
        }}
      >
        {children}
      </Marquee>
    </section>
  );
};

export default MarqueeWrapper;
